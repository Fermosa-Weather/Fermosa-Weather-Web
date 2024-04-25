const { DataTypes, sequelize } = require('../config/db');

// Definir el modelo para la tabla users_rol
const Genero = sequelize.define('genero', {
  id_genero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "genero",
  modelName: "genero",
});


Genero.sync({ force: false }).then(async () => {
  console.log('Tabla de género creada');
  // Verificar si ya existen registros en la tabla
  const count = await Genero.count();
  if (count === 0) {
    // Crear los registros de género solo si no existen
    try {
      await Genero.bulkCreate([
        { id_genero: "1", genero: 'Masculino' },
        { id_genero: "2", genero: 'Femenino' },
        { id_genero: "3", genero: 'Sin especificar' }
      ]);
      console.log('Registros de géneros creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros de géneros:', error);
    }
  } else {
    console.log('La tabla de género ya contiene registros, no se crearán nuevos.');
  }
});


module.exports = {Genero}; 