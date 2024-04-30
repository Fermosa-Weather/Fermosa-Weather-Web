import { sequelize } from '../../database/db.js';
import {DataTypes} from 'sequelize';

export const CorreosEnviados = sequelize.define(
'CorreosEnviados', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
    timestamps:true,
    tableName: "correos",
});

