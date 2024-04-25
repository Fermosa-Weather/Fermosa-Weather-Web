const express = require('express');
const router = express.Router();
const { ctrlFindPaises, ctrlFindDepar, ctrlFindRubro,
    ctrlFindLocal, ctrlFindProvinces } = require("../controllers/info.controller")

//CREAR POSTEOS
router.get("/findPaises", ctrlFindPaises)

router.get("/findDepar", ctrlFindDepar)

router.get("/findRubro", ctrlFindRubro)

router.get("/findLocal", ctrlFindLocal)

router.get("/findProvinces", ctrlFindProvinces)

module.exports = router;