const { Router } = require("express");

const enrutadorAuth = Router();
// importar funcion del controlador
const { iniciarSesion, registrarse } = require("../controllers/autenticarController");

// Ruta de registro en el sistema
enrutadorAuth.post("/registro", registrarse)

// Ruta de inicio de sesion
enrutadorAuth.post("/login", iniciarSesion)

// se realiza todas las rutas, con( POST,PUT,DELETE)
module.exports = enrutadorAuth;
