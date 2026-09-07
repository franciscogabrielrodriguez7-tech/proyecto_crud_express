const express = require('express');
require('dotenv').config();
const sistemaArchivo = require("fs")
// fs : fileSystem 
const ruta = require("path")
// permite usar rutas
const rutaMiArchivo = ruta.join(__dirname, "datos.json")

const app = express();
const PORT = process.env.PORT || 3003;
app.use(express.json());
// middleware para parsear el body de las peticiones
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ mensaje: '¡API Rest Full con express!' });
});

app.get('/api/aprendices', (req, res) => {
    // res.status(200).json({ mensaje: 'Lista de aprendices' });
    sistemaArchivo.readFile(rutaMiArchivo, "utf-8", (error, datos) => {
        if (error) res.status(500).json({ mensaje: 'Error al leer el archivo' });
        const listaAprendices= JSON.parse(datos)
        res.status(200).json({listado: listaAprendices});
        }
    );
});

app.post('/api/aprendices', (req, res) => {
    // const datosAprendiz = req.body
    // res.status(201).json({ mensaje: 'Aprendiz creado', datos: datosAprendiz});
    
    // se piden los datos del aprendiz
    
    // se lee el archivo y se agrega el aprendiz
        
        sistemaArchivo.readFile(rutaMiArchivo, "utf-8", (error, datos) => {
        if (error) res.status(500).json({ mensaje: 'Error al leer el archivo' });
            const listaAprendices= JSON.parse(datos)
        
        const datosAprendiz = req.body
        // if (!datosAprendiz.nombre || !datosAprendiz.edad || !datosAprendiz.correo || !datosAprendiz.imagen || !datosAprendiz.clave) {
        //     res.status(400).json({ mensaje: 'Faltan datos del aprendiz' });
        //     }
        listaAprendices.push(datosAprendiz)
        
        // se escribe el aprendiz en el archivo
        sistemaArchivo.writeFile(rutaMiArchivo, JSON.stringify(listaAprendices,null,2), (error) => {
            if (error) res.status(500).json({ mensaje: 'Error al crear el aprendiz en el archivo' });
            res.status(201).json({mensaje: 'Aprendiz creado', datos: datosAprendiz});
        });
    });
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