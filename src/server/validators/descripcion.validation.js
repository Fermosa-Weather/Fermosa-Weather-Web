const { check } = require("express-validator")
const { validateSchema } = require("../middlewares/validateHealper.js")

const validateDescripcion = [
    //OBLIGATORIOS
    check("descripcion")
        .optional()
        .notEmpty().withMessage("Este campo no puede estar vacio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("No se pueden incluir caracteres especiales")
    ,

    check("estudios")
        .optional()
        .notEmpty().withMessage("Este campo no puede estar vacio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("No se pueden incluir caracteres especiales")
    ,

    check("habilidades")
        .optional()
        .notEmpty().withMessage("Este campo no puede estar vacio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("No se pueden incluir caracteres especiales")
    ,

    check("intereses")
        .optional()
        .notEmpty().withMessage("Este campo no puede estar vacio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("No se pueden incluir caracteres especiales")
    ,

    check("experiencia")
        .optional()
        .notEmpty().withMessage("Este campo no puede estar vacio")
        .matches(/^[a-zA-Z0-9\s\-.,#]+$/).withMessage("No se pueden incluir caracteres especiales")
    ,

    (req, res, next) => {
        validateSchema(req, res, next)
    }
]

module.exports = { validateDescripcion }