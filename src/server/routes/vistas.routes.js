const express = require('express');
const router = express.Router();
const { validarJWT } = require("../middlewares/autenticarToken")
const { protegerRuta } = require("../middlewares/protegerRuta")
const { ctrlFindUserBySession } = require("../controllers/user.controllers")
const {ctrlCrearPosteos} = require("../controllers/posts.controllers")
//SE IMPORTAN LOS CONTROLADORES PARA RENDERIZAR LAS VISTAS

const { index,
    inicio,
    masInfo,
    registro,
    login,
    solicitudes,
    novedades,
    perfil,
    perfilpostulante,
    perfilempresa, 
    file,
    posteos
} = require('../controllers/vista.controllers')

// RUTAS INICIALES
router.get('/index', index)
router.get('/mas-info', masInfo)


// RUTAS DE REGISTRO-LOGIN
router.get('/registro', registro)
router.get('/login', login)


// // RUTAS PRINCIPAL
router.get('/inicio', validarJWT, inicio)
router.get('/novedades', validarJWT, novedades);
router.get('/solicitudes', validarJWT, solicitudes);
router.get('/file', validarJWT, file)
router.get('/posteos', validarJWT, posteos)


// // EDITAR PERFILES
router.get('/perfil/editar-perfil-usuario',validarJWT,  perfilpostulante);
router.get('/perfil/editar-perfil-empresa',validarJWT,  perfilempresa);

module.exports = router;