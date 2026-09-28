const { Router } = require("express");

const enrutadorAuth = Router();
// importar funcion del controlador
const { iniciarSesion } = require("../controllers/autenticarController");
// Ruta de registro en el sistema
enrutadorAuth.post("/registro", (req, res)=>{
    res.json({ mensaje: "Ruta de Registro"});
})

// Ruta de inicio de sesion
enrutadorAuth.post("/login", (req, res)=>{
    iniciarSesion(req, res);
})

// se realiza todas las rutas, con( POST,PUT,DELETE)
module.exports = enrutadorAuth;