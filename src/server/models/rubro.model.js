const { DataTypes, sequelize } = require('../config/db');

// Definir el modelo para la tabla users_rol
const Rubro = sequelize.define('rubro', {
  id_rubro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  desc_rubro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  paranoid: false,
  tableName: "rubro"
});

Rubro.sync({ force: false }).then(async () => {
  console.log('Tabla de rubro creada');

  // Verificar si ya existen registros en la tabla
  const count = await Rubro.count();
  if (count === 0) {
    // Crear los registros de rubro después de crear la tabla
    try {
      await Rubro.bulkCreate([
        { desc_rubro: 'Salud' },
        { desc_rubro: 'Tecnologia' },
        { desc_rubro: 'Reparaciones' },
        { desc_rubro: 'Finanzas' },
        { desc_rubro: 'Manufactura' },
        { desc_rubro: 'Ventas' },
        { desc_rubro: 'Administración' },
        { desc_rubro: 'Alimenticio' },
        { desc_rubro: 'Construcción' },
        { desc_rubro: 'Docente' },
        { desc_rubro: 'Otros' },
      ]);
      console.log('registros de rubros creados exitosamente');
    } catch (error) {
      console.error('Error al crear los registros de rubros', error);
    }
  }
});

async function findRubro() {
  try {
      return await Rubro.findAll()
  } catch (error) {
      console.log("Error al buscar rubros", error);
  }
}

module.exports = {Rubro, findRubro}; 