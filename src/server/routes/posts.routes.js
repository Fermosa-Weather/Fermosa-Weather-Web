const express = require('express');
const router = express.Router();
const { ctrlCrearPosteos, ctrlFindAllPosts, ctrlFindFilteredPost, ctrlDeletePost, ctrlFindPostEmpresa,
    ctrlFindPostPostulante, ctrlfindUserPost } = require("../controllers/posts.controllers")
const upload = require('../middlewares/multer');

//CREAR POSTEOS
router.post("/createPost", upload.single('url'), ctrlCrearPosteos)

router.get("/findAllPosts", ctrlFindAllPosts)

router.post("/findFilteredPost", ctrlFindFilteredPost)

router.delete("/deletePost", ctrlDeletePost)

router.get("/findPostEmpresa", ctrlFindPostEmpresa)

router.get("/findPostPostulante", ctrlFindPostPostulante)

router.post("/findUserPost", ctrlfindUserPost)

module.exports = router;