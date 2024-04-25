const { DataTypes, sequelize } = require('../config/db');
//CREAR MODELO DE USERS
const Localidad = sequelize.define('localidad', {
    id_local: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_local: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_depar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamento',
            key: 'id_depar'
        }
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "localidad",
    modelName: "localidad"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Localidad.sync({ force: false }).then(async () => {
    console.log('Tabla de Localidad creada');

    try {
        await sequelize.sync({ force: false });
        // Verificar si ya existen registros en la tabla
        const count = await Localidad.count();
        if (count === 0) {
            // Crear los registros de nacionalidad solo si no existen

            await Localidad.bulkCreate([
                { id_local: 1, nombre_local: 'Formosa', id_depar: 1 },
                { id_local: 2, nombre_local: 'Colonia Pastoril', id_depar: 1 },
                { id_local: 3, nombre_local: 'Gran Guardia', id_depar: 1 },
                { id_local: 4, nombre_local: 'San Hilario', id_depar: 1 },
                { id_local: 5, nombre_local: 'Mariano Boedo', id_depar: 1 },
                { id_local: 6, nombre_local: 'Villa del Carmen', id_depar: 1 },
                { id_local: 7, nombre_local: 'Clorinda', id_depar: 2 },
                { id_local: 8, nombre_local: 'Laguna Naick Neck', id_depar: 2 },
                { id_local: 9, nombre_local: 'Riacho He He', id_depar: 2 },
                { id_local: 10, nombre_local: 'Monte Lindo', id_depar: 2 },
                { id_local: 11, nombre_local: 'S.F Laishí', id_depar: 3 },
                { id_local: 12, nombre_local: 'Gral. Mansilla', id_depar: 3 },
                { id_local: 13, nombre_local: 'Herradura', id_depar: 3 },
                { id_local: 14, nombre_local: 'Yatai', id_depar: 3 },
                { id_local: 15, nombre_local: 'Misión Tacaagle', id_depar: 4 },
                { id_local: 16, nombre_local: 'Laguna Gallo', id_depar: 4 },
                { id_local: 17, nombre_local: 'Tres Lagunas', id_depar: 4 },
                { id_local: 18, nombre_local: 'El Espinillo', id_depar: 4 },
                { id_local: 19, nombre_local: 'Pirané', id_depar: 5 },
                { id_local: 20, nombre_local: 'El Colorado', id_depar: 5 },
                { id_local: 21, nombre_local: 'Villa Dos Trece', id_depar: 5 },
                { id_local: 22, nombre_local: 'Mayor Villafañe', id_depar: 5 },
                { id_local: 23, nombre_local: 'Palo Santo', id_depar: 5 },
                { id_local: 24, nombre_local: 'Las Lomitas', id_depar: 6 },
                { id_local: 25, nombre_local: 'Comandante Fontana', id_depar: 6 },
                { id_local: 26, nombre_local: 'Villa Gral Guemes', id_depar: 6 },
                { id_local: 27, nombre_local: 'Estanislao del Campo', id_depar: 6 },
                { id_local: 28, nombre_local: 'Pozo del Tigre', id_depar: 6 },
                { id_local: 29, nombre_local: 'Gral. Belgrano', id_depar: 6 },
                { id_local: 30, nombre_local: 'San Martin I', id_depar: 6 },
                { id_local: 31, nombre_local: 'San Martin II', id_depar: 6 },
                { id_local: 32, nombre_local: 'Fortin Lugones', id_depar: 6 },
                { id_local: 33, nombre_local: 'Subt. Perin', id_depar: 6 },
                { id_local: 34, nombre_local: 'Posta Cambio Zalazar', id_depar: 6 },
                { id_local: 35, nombre_local: 'Colonia Sarmiento', id_depar: 6 },
                { id_local: 36, nombre_local: 'Juan G. Bazan', id_depar: 6 },
                { id_local: 37, nombre_local: 'Bartolomé De Las Casas', id_depar: 6 },
                { id_local: 38, nombre_local: 'El Recreo', id_depar: 6 },
                { id_local: 39, nombre_local: 'Fortin Sargento Leyes', id_depar: 6 },
                { id_local: 40, nombre_local: 'Fortin Soledad', id_depar: 7 },
                { id_local: 41, nombre_local: 'Guadalcazar', id_depar: 7 },
                { id_local: 42, nombre_local: 'Lamadrid', id_depar: 7 },
                { id_local: 43, nombre_local: 'La Rinconada', id_depar: 7 },
                { id_local: 44, nombre_local: 'Los Chiriguanos', id_depar: 7 },
                { id_local: 45, nombre_local: 'Pozo de Maza', id_depar: 7 },
                { id_local: 46, nombre_local: 'Pozo del Mortero', id_depar: 7 },
                { id_local: 47, nombre_local: 'Vaca Perdida', id_depar: 7 },
                { id_local: 48, nombre_local: 'Gral. Mosconi', id_depar: 8 },
                { id_local: 49, nombre_local: 'El Potrillo', id_depar: 8 },
                { id_local: 50, nombre_local: 'Ing. Juarez', id_depar: 9 },

            ]);
            console.log('registros de Localidads creados exitosamente');
        }
    } catch (error) {
        console.error('Error al crear los registros de Localidads', error);
    }
});

async function findLocal() {
    try {
        return await Localidad.findAll()
    } catch (error) {
        console.log("Error al buscar localidades", error);
    }
}

module.exports = {Localidad, findLocal};