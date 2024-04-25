const { where } = require('sequelize');
const { DataTypes, sequelize } = require('../config/db');

const File = sequelize.define('File', {
    id_file: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    paranoid: false,
    tableName: "File",
    modelName: "File",
});


// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
File.sync({ force: false }).then(() => {
    console.log('Tabla de files creada')
})


//BUSCAR ARCHIVOS
async function findFiles(data) {

    try {
        const descripcion = await File.findAll({
            where: {
                id_user: data.id_user
            }
        })
        return descripcion
    } catch (error) {
        console.log("ERROR AL BUSCAR DESCRIPCION", error);
    }
}

//CREAR ARCHIVOS
async function createFile(data, filename) {
    try {
        const file = await File.create({
            id_user: data.id_user,
            url: `/uploads/${filename}`,
        })
        return file
    } catch (error) {
        console.log("ERROR AL SUBIR ARCHIVO", error);
    }
}

//ELIMINAR ARCHIVOS
async function deleteFile(data) {
    try {
        return await File.destroy({
            where: {
                id_file: data.id_file
            }
        })
    } catch (error) {
        console.error("Error al eliminar archivo", error);

    }
}

module.exports = { File, createFile, deleteFile, findFiles }
