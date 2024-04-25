const { DataTypes, sequelize } = require('../config/db');

// Definir el modelo para la tabla users_rol
const EstadoLaboral = sequelize.define('estado_laboral', {
  id_estado_laboral: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  desc_estado_laboral: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "estado_laboral"
});

EstadoLaboral.sync({ force: false }).then(async () => {
  console.log('Tabla de estado laboral creada');

  // Verificar si ya existen registros en la tabla
  const count = await EstadoLaboral.count();
  if (count === 0) {
    // Crear los registros de estado laboral después de crear la tabla
    try {
      await EstadoLaboral.bulkCreate([
        { desc_estado_laboral: 'desempleado' },
        { desc_estado_laboral: 'empleado' },
      ]);
      console.log('registros de estado laboral creada exitosamente');
    } catch (error) {
      console.error('Error al crear los registros de estado laboral', error);
    }
  }
});

module.exports = EstadoLaboral; 