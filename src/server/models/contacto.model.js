const { DataTypes, sequelize } = require('../config/db');
const { User } = require("./users.model.js")
// Definir el modelo para la tabla contacto
const Contacto = sequelize.define('Contacto', {
    id_contacto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    num_tel: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    redes: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "contacto",
    modelName: "contacto",
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
Contacto.sync({ force: false }).then(() => {
    console.log('Tabla de contactos creada')
})

async function createContacto(id_user) {

    try {

        return await Contacto.create(
            {
                id_user: id_user,
                num_tel: null,
                domicilio: null,
                redes: null,
            }
        );

    } catch (error) {
        console.log("Error al crear registro de contacto", error)
        throw error
    }
}

async function updateUserContact(data) {

    try {
        const user_contact = await Contacto.update(
            {
                num_tel: data.num_tel,
                domicilio: data.domicilio,
                redes: data.redes,
            },
            {
                where: {
                    id_user: data.id_user
                }
            }
        );
        return user_contact;
    } catch (error) {
        console.log("Error al actualizar registro de contacto", error);
        throw error
    }
}

async function findContact(data) {
    try {
        const contact = await Contacto.findOne({
            where: {
                id_user: data.id_user
            }
        })
        return contact
    } catch (error) {
        console.log("Error buscar registro de contacto", error);
        throw error
    }
}

module.exports = { createContacto, Contacto, updateUserContact, findContact }
