const express = require('express');
const router = express.Router();

router.get('/cerrar-sesion', (req, res) => {
    res.clearCookie("token")/* (err => {
        if (err) {
            console.error('Error al cerrar sesión:', err);
            res.status(500).send('Error al cerrar sesión');
        } else {
            res.status(200).send('Sesión cerrada exitosamente');
            console.log("SESION CERRADA")
        }
    }); */
    res.clearCookie("id_user")
    res.clearCookie("id_rol")
    res.clearCookie("username")
    console.log("SESION CERRADA");

    return res.redirect('/index');
});


module.exports = router;