require("dotenv").config();
const express = require("express");
// debemos importar los enrutadores 
const enrutadorGeneral = require("./routes");

const app = express();

// improtar los middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// usamos  el enrutador general
app.use("/api", enrutadorGeneral)

// endpoint raiz, de bienvenida a la API
app.get("/", (req, res)=>{
    res.send("API Rest 3407182 en funcionamiento");
});

module.exports = app;