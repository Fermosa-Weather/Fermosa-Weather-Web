const { DataTypes, sequelize } = require('../config/db');

//CREAR MODELO DE USERS
const Departamento = sequelize.define('departamento', {
    id_depar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_depar: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "departamento",
    modelName: "departamento"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Departamento.sync({ force: false }).then(async () => {
    console.log('Tabla de departamento creada');

    // Verificar si ya existen registros en la tabla
    const count = await Departamento.count();
    if (count === 0) {
        // Crear los registros de nacionalidad solo si no existen
        try {
            await Departamento.bulkCreate([
                { nombre_depar: 'Formosa' },
                { nombre_depar: 'Pilcomayo' },
                { nombre_depar: 'Pilagás' },
                { nombre_depar: 'Laishí' },
                { nombre_depar: 'Pirané' },
                { nombre_depar: 'Patiño' },
                { nombre_depar: 'Bermejo' },
                { nombre_depar: 'Ramon Lista' },
                { nombre_depar: 'Matacos' },
            ]);
            console.log('registros de departamentos creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros de departamentos', error);
        }
    } else {
        console.log('La tabla de departamentos ya contiene registros, no se crearán nuevos.');
    }
});

async function findDepar() {
    try {
        return await Departamento.findAll()
    } catch (error) {
        console.log("Error al buscar departamentos", error);
    }
}

module.exports = {Departamento, findDepar};