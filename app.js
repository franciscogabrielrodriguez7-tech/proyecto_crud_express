const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensaje: '¡API Rest Full con express!' });
});

app.get('/api/aprendices', (req, res) => {
    res.status(200).json({ mensaje: 'Lista de aprendices' });
});

app.post('/api/aprendices', (req, res) => {
     const datosAprendiz = req.body
    res.status(201).json({ mensaje: 'Aprendiz creado', datos: datosAprendiz});
});

app.patch('/api/aprendices/:id_aprendiz', (req, res) => {
    res.status(200).json({ mensaje: 'Aprendiz actualizado'});
});

app.delete('/api/aprendices/:id_aprendiz', (req, res) => {
    res.status(200).json({ mensaje: 'Eliminar aprendiz' });
});

app.post('/api/aprendices/login', (req, res) => {
    const datosAprendiz = req.body;
    const edad = req.body.edad;
    if (!datosAprendiz.edad){
        res.status(400).json({mensaje:'No se recibieron datos del aprendiz'});
    }
    else if (edad >= 18) {
    res.status(201).json({ mensaje: 'Bienvenido', datos: datosAprendiz.nombre, edad: edad });}
    else {
        res.status(401).json({mensaje:'No puedes ingresar, eres menor de edad', edad: edad});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});