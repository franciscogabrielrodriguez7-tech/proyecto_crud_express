const iniciarSesion = async (req, res) => {
    // simular db de un usuario registrado
    const userBd = {
        usuario: "Francisco",
        clave: "1234"
    }
    try {
        const { usuario, clave } = req.body;
        // comparar con userBd
        if (usuario !== userBd.usuario || clave !== userBd.clave){
            res.json({ mensaje: "Usuario o clave incorrecta"})
        }
        res.json({ mensaje: "Usuario Bienvenido"})

    }   
    catch (error) {
        res.json({Error: error})
    }
}

module.exports = iniciarSesion