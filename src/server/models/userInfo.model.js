// const { request } = require('express');
const { DataTypes, sequelize } = require('../config/db');

const { User } = require('./users.model');
const { Localidad } = require('./localidad.model')
const { Departamento } = require('./departamento.model')
const { Genero } = require('./genero.model');
const { Paises } = require('./paises.model');
const { Provincia } = require('./provincias.models');
const { where } = require('sequelize');

const UserInfo = sequelize.define('user_info', {
    id_info: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cuil: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_pais: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_provincia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    otro_pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_depar: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_local: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "user_info",
    modelName: "user_info"
});

UserInfo.sync({ force: false }).then(() => {
    console.log('Tabla de info usuario creada')
})

//BUSCAR POR RUBRO
async function findByRubro(data,) {
    try {
        return await UserInfo.findOne({
            where: { id_rol: data }
        })
    } catch (error) {
        console.log("Error al encontrar usuario por rubro", error)
    }
}

//BUSCAR TODA LA INFO DE USUARIO
async function findUserInfo(data) {

    console.log("id_user", data);


    try {
        return await UserInfo.findOne({
            where: { id_user: data.id_user },
            attributes: {
                exclude: ['id_user', 'id_info', 'id_pais', 'id_provincia', 'id_depar', 'id_local', 'id_genero']
            },
            include: [

                {
                    model: Localidad,
                    attributes: ['nombre_local']
                }, {
                    model: Departamento,
                    attributes: ['nombre_depar']
                },
                {
                    model: Genero,
                    attributes: ['genero']
                },
                {
                    model: Paises,
                    attributes: ['nombre_pais']
                },
                {
                    model: Provincia,
                    attributes: ['nombre_provincia']
                },
                {
                    model: User,
                    attributes: ["user_name", "user_email", "id_rol"]
                },
            ]
        })
    } catch (error) {
        console.log("Error al encontrar info de usuario", error);
    }
}

//FUNCION PARA CREAR REGISTRO EN USERINFO
async function createInfoUser(id_user) {

    try {
        const user_info = await UserInfo.create({
            id_user: id_user,
            nombre: null,
            apellido: null,
            dni: null,
            cuil: null,
            fecha_nacimiento: null,
            id_genero: null,
            id_pais: null,
            otro_pais: null,
            id_provincia: null,
            id_depar: null,
            id_local: null,
        },
        );
        return user_info

    } catch (error) {
        console.log("Error al crear registro de user_info", error);
        throw error
    }
}

async function updateInfoUser(data) {

    try {
        const user_info = await UserInfo.update(
            {
                id_user: data.id_user,
                nombre: data.nombre,
                apellido: data.apellido,
                dni: data.dni,
                cuil: data.cuil,
                fecha_nacimiento: data.fecha_nacimiento,
                id_genero: data.id_genero,
                id_pais: data.id_pais,
                otro_pais: data.otro_pais,
                id_provincia: data.id_provincia,
                id_depar: data.id_depar,
                id_local: data.id_local,
            },
            {
                where: {
                    id_user: data.id_user
                }
            }
        );
        return user_info;
} catch (error) {
    console.log("Error al actualizar registro de user_info", error);
    throw error
}
}

module.exports = { UserInfo, findByRubro, findUserInfo, createInfoUser, updateInfoUser }
