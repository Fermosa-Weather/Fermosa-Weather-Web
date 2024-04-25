// El método config de dotenv permite leer variables de entorno desde un archivo .env
require('dotenv').config();

//SE DEFINE EL ENTORNO DE EJECUCION EN CASO DE NO CONTAR CON VARIABLES DE ENTORNO
const environments = {
    PORT: process.env.PORT || 5000,
    SECRET_KEY: process.env.SECRET_KEY || "Ñ1Ñ2Ñ3Ñ4Ñ5",
    DB: {
        DB_NAME: process.env.DB_NAME || "db",
        DB_HOST: process.env.DB_HOST || "localhost",
        DB_DIALECT: process.env.DB_DIALECT || "mysql",
        DB_USER: process.env.DB_USER || "root",
        DB_PASSWORD: process.env.DB_PASSWORD || "",
        DB_PORT: process.env.DB_PORT || 3309
    }
};

module.exports = environments;