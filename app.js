const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3333;


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensaje: '¡Servidor funcionando correctamente!' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});