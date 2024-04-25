const { where } = require('sequelize');
const { DataTypes, sequelize } = require('../config/db');

const Descripcion = sequelize.define('Descripcion', {
    id_descripcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estudios: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    habilidades: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    intereses: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    experiencia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "Descripcion",
    modelName: "Descripcion",
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Descripcion.sync({ force: false }).then(() => {
    console.log('Tabla de descripcion creada')
})

//ACTUALIZAR DESC
async function updateDesc(data) {
    try {
        const descripcion = await Descripcion.update({
            descripcion: data.descripcion,
            estudios: data.estudios,
            habilidades: data.habilidades,
            intereses: data.intereses,
            experiencia: data.experiencia,
        }, {
            where: {
                id_user: data.id_user
            }
        })

        if (descripcion) {
            return descripcion
        }
    } catch (error) {
        console.log("ERROR AL CREAR DESCRIPCION", error);
    }
}

//BUSCAR DESC
async function findDesc(data) {

    try {
        const descripcion = await Descripcion.findOne({
            where: {
                id_user: data.id_user
            }
        })
        return descripcion
    } catch (error) {
        console.log("ERROR AL BUSCAR DESCRIPCION", error);
    }
}

//CREAR DESC
async function createDesc(data) {
    try {
        const descripcion = await Descripcion.create({
            id_user: data,
            descripcion: null,
            estudios: null,
            habilidades: null,
            intereses: null,
            experiencia: null,
        })
        return descripcion
    } catch (error) {
        console.log("ERROR AL CREAR DESCRIPCION", error);
    }
}

module.exports = { Descripcion, createDesc, updateDesc, findDesc }
