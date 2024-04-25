const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { ctrlUploadPfp, ctrlFindPfp, ctrlDeleteImg, ctrlfindAllImgs,
    ctrlCreateFile, ctrlFindAllFiles, ctrlDeleteFile } = require("../controllers/files.controller")


const { validarJWT } = require('../middlewares/autenticarToken');
//RUTA PARA IMAGENES
router.post("/pfp", validarJWT, upload.single("url"), ctrlUploadPfp)

router.post("/findPfp", validarJWT, ctrlFindPfp)

router.post("/findAllImgs", validarJWT, ctrlfindAllImgs)

router.delete("/deleteImg", validarJWT, ctrlDeleteImg)


//RUTA PARA ARCHIVOS
router.post("/createFile", validarJWT, upload.single("url"), ctrlCreateFile)

router.post("/findAllFiles", validarJWT, ctrlFindAllFiles)

router.delete("/deleteFile", validarJWT, ctrlDeleteFile)



module.exports = router