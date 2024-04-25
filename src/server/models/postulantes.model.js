const { DataTypes, sequelize } = require('../config/db');

const EstadoLaboral = require("./estado_laboral.model")
const NivelEducacion = require("./nivelEduacion.model")
const { Rubro } = require("./rubro.model")

//CREAR MODELO DE USERS
const Postulante = sequelize.define('postulante', {
    id_postulante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    id_estado_laboral: {
        type: DataTypes.INTEGER,
    },
    id_nivel_educacion: {
        type: DataTypes.INTEGER,
    },
    id_rubro: {
        type: DataTypes.INTEGER,
    },
    otro_rubro: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "postulante"
});

Postulante.sync({ force: false }).then(() => {
    console.log('Tabla de postulantes creada')
})
//BUSCAR POSTULANTE POR RUBRO
async function findRubroByIdPostulante(data) {
    try {
        return await Postulante.findOne({ where: { id_user: data } }) ?? null
    } catch (error) {
        console.log("Error al encontrar el registro de postulantes ", error)
        throw error;
    }
}
//CREAR POSTULANTE
async function createPostulante(id_user, userData) {

    try {

        return await Postulante.create(
            {
                id_user: id_user,
                id_estado_laboral: null,
                id_nivel_educacion: null,
                id_rubro: null,
                otro_rubro: null
            },
        );

    } catch (error) {
        console.log("Error al crear el registro de postulantes ", error)
        throw error
    }
}
//ACTUALIZAR POSTULANTE
async function updatePostulante(data) {

    try {

        return await Postulante.update(
            {
                id_estado_laboral: data.id_estado_laboral,
                id_nivel_educacion: data.id_nivel_educacion,
                id_rubro: data.id_rubro,
                otro_rubro: data.otro_rubro
            },
            {
                where: {
                    id_user: data.id_user
                }
            }
        );

    } catch (error) {
        console.log("Error al actualizar el registro de postulantes ", error)
        throw error
    }
}

//BUSCAR POSTULANTE
async function findPostulante(data) {
    try {
        return await Postulante.findOne({
            where: { id_user: data.id_user },
            include: [
                {
                    model: EstadoLaboral,
                    attributes: [
                        "desc_estado_laboral"
                    ]
                },
                {
                    model: NivelEducacion,
                    attributes: [
                        "desc_nivel_educacion"
                    ]
                },
                {
                    model: Rubro,
                    attributes: [
                        "desc_rubro"
                    ]
                }
            ]
        },

        ) ?? null
    } catch (error) {
        console.log("Error al encontrar el registro de Empleadors ", error)
        throw error;
    }
}

module.exports = { Postulante, createPostulante, findRubroByIdPostulante, updatePostulante, findPostulante }