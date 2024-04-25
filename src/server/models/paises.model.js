const { DataTypes, sequelize } = require('../config/db');

//CREAR MODELO DE USERS
const Paises = sequelize.define('paises', {
    id_pais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_pais: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "paises",
    modelName: "paises"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Paises.sync({ force: false }).then(async () => {
    console.log('Tabla de paises creada');

    // Verificar si ya existen registros en la tabla
    const count = await Paises.count();
    if (count === 0) {
        // Crear los registros de Paises solo si no existen
        try {
            await Paises.bulkCreate([
                { nombre_pais: 'Argentina' },
                { nombre_pais: 'Bolivia' },
                { nombre_pais: 'Brasil' },
                { nombre_pais: 'Chile' },
                { nombre_pais: 'Colombia' },
                { nombre_pais: 'Ecuador' },
                { nombre_pais: 'Paraguay' },
                { nombre_pais: 'Perú' },
                { nombre_pais: 'Uruguay' },
                { nombre_pais: 'Venezuela' },
                { nombre_pais: 'Otros' }
            ]);
            console.log('registros de paises creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros paises', error);
        }
    } else {
        console.log('La tabla de Paiseses ya contiene registros, no se crearán nuevos.');
    }
});

async function findPaises() {
    try {
        return await Paises.findAll()
    } catch (error) {
        console.log("Error al buscar paises", error);
    }
}

module.exports = { Paises, findPaises };