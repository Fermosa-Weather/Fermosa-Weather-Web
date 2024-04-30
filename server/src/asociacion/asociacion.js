// En associate.js
import { Auth } from "../models/schemas/auth.js";
import {CorreosEnviados} from "../models/schemas/correo.js"

export const associate = async () => {
  try {
    // Crear las tablas
    await Auth.sync({ force: false });
    await CorreosEnviados.sync({ force:false});

    // Asociar modelos
    // Cliente.hasMany(Producto, {
    //   foreignKey: 'clienteId',
    //   sourceKey: 'id',
    // });

    // Empleado.hasMany(Cliente, {
    //   foreignKey: 'empleadoId',
    //   sourceKey: 'id',
    // });

    console.log('Se crearon las tablas y se asociaron los modelos.');

  } catch (error) {
    console.error('Error al sincronizar las tablas y asociar los modelos:', error);
  }
};

