const { Router } = require("express");

const enrutadorAuth = Router();

// Ruta de registro en el sistema
enrutadorAuth.post("/registro", (req, res)=>{
    res.json({ mensaje: "Ruta de Registro"});
})

// Ruta de inicio de sesion
enrutadorAuth.post("/login", (req, res)=>{
    res.json({ mensaje: "Ruta de inicio de sesion"});
})

// se realiza todas las rutas, con( POST,PUT,DELETE)
module.exports = enrutadorAuth;