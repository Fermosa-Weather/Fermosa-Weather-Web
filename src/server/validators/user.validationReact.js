const { check } = require("express-validator")
const { validateSchema } = require("../middlewares/validateHealper.js")
const { findUserByEmail, findUserByUserName } = require("../models/users.model.js")

const validatUserReact = [
    //OBLIGATORIOS
    check("user_name")
        // .exists()
        .notEmpty().withMessage("El nombre de usuario no debe estar vacio")
        .isAlphanumeric().withMessage("El nombre de usuario no debe estar vacio")
        .isLength({ min: 6, max: 30 }).withMessage('El nombre de usuario debe tener entre 6 y 30 caracteres')
        .custom(async (value,) => {
            const existeUsername = await findUserByUserName(value)
            if (existeUsername) {
                throw new Error('El nombre de usuario ya está registrado');
            }
            return true;
        }),

    check("user_password")
        // .exists()
        .notEmpty().withMessage("La contraseña no debe estar vacia")
        .isAlphanumeric().withMessage("La contraseña no debe estar vacia")
        .isStrongPassword({ minLength: 9, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }).withMessage('La contraseña debe tener almenos 1 mayuscula, 1 minuscula, 1 numero y 9 caracteres'),


    check("validarPass")
        // .exists().withMessage("Debe confirmar la contraseña")
        .notEmpty().withMessage("Debe confirmar la contraseña")
        .custom((value, { req }) => {
            if (value !== req.body.user_password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),

    check("user_email")
        // .exists()
        .notEmpty().withMessage("El email no puede estar vacio")
        // .isEmail().withMessage("Se debe proporcionar un email valido")
        .custom(async (value) => {
            const existeEmail = await findUserByEmail(value)
            if (existeEmail) {
                throw new Error('El email ya está registrado');
            }
            return true;
        })
        ,

    check("validarEmail")
        // .exists().withMessage("Debe confirmar su email")
        .notEmpty().withMessage("Debe confirmar su email")
        .custom((value, { req }) => {
            if (value !== req.body.user_email) {
                throw new Error("Los emails no coinciden");
            }
            return true;
        }),

    check("id_rol")
        // .exists()
        .notEmpty().withMessage("Debe seleccionar su rol")
        // .isNumeric().withMessage("Debe seleccionar su rol")
        ,

    (req, res, next) => {
        validateSchema(req, res, next)
    }
]

module.exports = { validatUserReact }