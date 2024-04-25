const { DataTypes, sequelize } = require('../config/db');

const {Rubro} = require("./rubro.model");

//CREAR MODELO DE USERS
const Empleador = sequelize.define('empleador', {
    id_empleador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    num_tel_empresa: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    domicilio_empresa: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nombre_empresa: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_rubro: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    otro_rubro: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    paranoid: false,
    tableName: "empleador"
});

Empleador.sync({ force: false }).then(() => {
    console.log('Tabla de empleador creada')
})

//BUSCAR EMPLEADOR POR RUBRO
async function findRubroByIdEmpleador(data) {
    try {
        return await Empleador.findOne({ where: { id_user: data } }) ?? null
    } catch (error) {
        console.log("Error al encontrar el registro de Empleadors ", error)
        throw error;
    }
}
//CREAR EMPLEADOR
async function createEmpleador(id_user) {

    try {
        return await Empleador.create(
            {
                id_user: id_user,
                num_tel_empresa: null,
                domicilio_empresa: null,
                nombre_empresa: null,
                id_rubro: null,
                otro_rubro: null
            },
        );

    } catch (error) {
        console.log("Error al crear registro de empleador", error)
        throw error
    }
};

//ACTUALIZAR EMPLEADOR
async function updateEmpleador(data) {

    try {
        return await Empleador.update(
            {
                num_tel_empresa: data.num_tel_empresa,
                domicilio_empresa: data.domicilio_empresa,
                nombre_empresa: data.nombre_empresa,
                id_rubro: data.id_rubro,
                otro_rubro: data.otro_rubro
            }, {
            where: {
                id_user: data.id_user
            }
        }
        );

    } catch (error) {
        console.log("Error al crear registro de empleador", error)
        throw error
    }
};

//BUSCAR EMPLEADOR POR ID
async function findEmpleador(data) {
    try {
        return await Empleador.findOne({
            where: { id_user: data.id_user },
            include: [
                {
                    model: Rubro,
                    attributes: ['desc_rubro'],
                }
            ]
        }) ?? null
    } catch (error) {
        console.log("Error al encontrar el registro de Empleadors ", error)
        throw error;
    }
}

module.exports = { Empleador, createEmpleador, findRubroByIdEmpleador, updateEmpleador, findEmpleador }