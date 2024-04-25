const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlFindUsers,
    ctrlFindUserByName,
    ctrlDeleteUser,
    ctrlUpdateUser,
    ctrlFindUserInfo,
    ctrlFindEmpleador,
    ctrlFindPostulante,
    ctrlDestroyUser,
    ctrlFindContact,
    ctrlFindUserById,
    ctrlCreateDesc,
    ctrlUpdateDesc,
    ctrlFindDesc,
} = require("../controllers/user.controllers")
const { ctrlSupportContact } = require("../controllers/mailer.controller")
const { ctrlUpdateUserInfo, ctrlUpdateUserContact, ctrlForgotPassword } = require("../controllers/updateInfo.controller")
const { validateInfo } = require("../validators/info.validation")
const { validateContact } = require("../validators/contact.validation")
const { validateDescripcion } = require("../validators/descripcion.validation");
const { validarJWT } = require('../middlewares/autenticarToken');

//BUSCAR USUARIOS E INFORMACION
router.get("/findAll", ctrlFindUsers)

router.post("/findByName", ctrlFindUserByName)

router.post("/findUserById", ctrlFindUserById)

router.post("/findUserInfo", validarJWT, ctrlFindUserInfo)

router.post("/findEmpleador", validarJWT, ctrlFindEmpleador)

router.post("/findPostulante", validarJWT, ctrlFindPostulante)

router.post("/findContact", validarJWT, ctrlFindContact)

router.post("/findDesc", ctrlFindDesc)

//CREATE

router.post("/createDesc", upload.single('url'), ctrlCreateDesc)

//ACTUALIZAR INFORMACION
router.put("/updateUser", validarJWT, ctrlUpdateUser)
router.put("/updateUserInfo", validarJWT, validateInfo, ctrlUpdateUserInfo)
router.put("/updateUserContact", validarJWT, validateContact, ctrlUpdateUserContact)
router.put("/updateDesc", validateDescripcion, ctrlUpdateDesc)

//ELIMINAR 
router.delete("/delete", ctrlDeleteUser)

router.delete("/destroyUser", ctrlDestroyUser)

//MAIL
router.post("/forgotPassword", ctrlForgotPassword)
router.post("/support", ctrlSupportContact)

module.exports = router;