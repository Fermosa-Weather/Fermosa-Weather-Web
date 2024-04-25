const { DataTypes, sequelize } = require('../config/db');

const Provincia = sequelize.define('provincia', {
    id_provincia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_provincia: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "provincia",
    modelName: "provincia"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Provincia.sync({ force: false }).then(async () => {
    console.log('Tabla de Provincias creada');

    // Verificar si ya existen registros en la tabla
    const count = await Provincia.count();
    if (count === 0) {
        // Crear los registros de provincias después de crear la tabla
        try {
            await Provincia.bulkCreate([
                { nombre_provincia: 'Buenos Aires' },
                { nombre_provincia: 'Catamarca' },
                { nombre_provincia: 'Chaco' },
                { nombre_provincia: 'Chubut' },
                { nombre_provincia: 'Cordoba' },
                { nombre_provincia: 'Córrientes' },
                { nombre_provincia: 'Entre Ríos' },
                { nombre_provincia: 'Formosa' },
                { nombre_provincia: 'Jujuy' },
                { nombre_provincia: 'La Pampa' },
                { nombre_provincia: 'La Rioja' },
                { nombre_provincia: 'Mendoza' },
                { nombre_provincia: 'Misiones' },
                { nombre_provincia: 'Neuquen' },
                { nombre_provincia: 'Río Negro' },
                { nombre_provincia: 'Salta' },
                { nombre_provincia: 'San Juan' },
                { nombre_provincia: 'San Luis' },
                { nombre_provincia: 'Santa Cruz' },
                { nombre_provincia: 'Santa Fe' },
                { nombre_provincia: 'Santiago del Estero' },
                { nombre_provincia: 'Tierra del Fuego' },
                { nombre_provincia: 'Tucuman' },
            ]);
            console.log('registros de provincias creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros de provincias', error);
        }
    }
});


async function findProvinces() {
    try {
        return await Provincia.findAll()
    } catch (error) {
        console.log("Error al buscar provincias", error);
    }
}

module.exports = {Provincia, findProvinces};