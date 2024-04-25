// SE TRAE LA LIBRERIA SEQUELIZE 
const { Sequelize, DataTypes } = require('sequelize');
const environments = require("./environment");
// Se crea una instancia de la conexión a la base de datos

const sequelize = new Sequelize(
    environments.DB.DB_NAME,
    environments.DB.DB_USER,
    environments.DB.DB_PASSWORD,
    {
        host: environments.DB.DB_HOST,
        dialect: environments.DB.DB_DIALECT,
        port: environments.DB.DB_PORT
    });

// SE PRUEBA LA CONEXION A LA DB
const conectarDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexion exitosa a la DB');
    } catch (error) {
        console.log('ERROR AL CONECTAR A LA DB: ', error);
    }
};

module.exports = {
    sequelize,
    DataTypes,
    conectarDB
};