const { DataTypes, sequelize } = require('../config/db');


// Definir el modelo para la tabla users_rol
const Rol = sequelize.define('rol', {
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rol_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "rol",
  modelName: "rol"
});

// Sincronizar el modelo con la base de datos (esto creará la tabla si no existe)
Rol.sync({ force: false }).then(async () => {
  console.log('Tabla de roles creada');

  // Verificar si ya existen registros en la tabla
  const count = await Rol.count();
  if (count === 0) {
    // Crear los registros de roles después de crear la tabla
    try {
      await Rol.bulkCreate([
        { rol_name: 'postulante' },
        { rol_name: 'empresa' },
        { rol_name: 'particular' }
      ]);
      console.log('registros de roles creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros roles', error);
    }
  }
});

module.exports = Rol;
