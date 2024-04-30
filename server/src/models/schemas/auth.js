import { sequelize, DataTypes } from "../../database/db.js";
import nodemailer from 'nodemailer';

export const Auth=sequelize.define(
    "auth",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        correo:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        supermercadoId: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        fotoUser: {
          type: DataTypes.STRING, 
          allowNull: true,
        },
        codigoRecuperacion: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        codigoRecuperacionExpiracion: {
          type: DataTypes.DATE,
          allowNull: true,
        },
    },
    {
        timestamps:true,
        tableName: "auth",
    }
);

// Obtener usuario por ID
export const getUserById = async (userId) => {
    try {
      const user = await Auth.findByPk(userId);
      return user;
    } catch (error) {
      console.error("Error al obtener usuario por ID:", error);
      throw error;
    }
  };

  export const getAllUsers=async ()=>{
    return await Auth.findAll() ?? null;
  }

  export const getOneUser = async (id) => {
    return await Auth.findOne({
      where: {
        id
      }
    }) ?? null;
  };

  export const EditOneUsers=async (id)=>{
    return await Auth.findByPk(id);;
  }

  export const DeleteOneUsers=async (id)=>{
    return await Auth.findByPk(id)
  }

  export const RegisterOneUsers=async (correo, hashedPassword)=>{
    return await Auth.create({
        correo,
        password: hashedPassword,
      });
  }

  export const LoginOneUsers=async (correo)=>{
    return await Auth.findOne({where:{correo}})
  }

  //generarEnviarcodigo
  export const generarEnviarCodigo = async (correo) => {
    try {
      // Genera un código de recuperación
      const codigoRecuperacion = Math.floor(100000 + Math.random() * 900000);
  
      // Obtén el usuario por su correo
      const usuario = await Auth.findOne({ where: { correo } });
  
      // Si el usuario existe, actualiza el código y la expiración
      if (usuario) {
        await usuario.update({
          codigoRecuperacion,
          codigoRecuperacionExpiracion: new Date(Date.now() + 600000), // Expira en 10 minutos
        });
  
        // Configura el transporte de nodemailer
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'ramsheedkk06@gmail.com', // Coloca tu dirección de correo electrónico de Gmail
            pass: 'ahyetfzwdgpgxcmc', // Coloca tu contraseña de Gmail o una contraseña de aplicación específica si tienes la autenticación de dos factores activada
          },
        });
  
        // Configura el contenido del correo
        const mailOptions = {
          from: 'ramsheedkk06@gmail.com',
          to: correo,
          subject: 'Código de recuperación de contraseña',
          text: `Tu código de recuperación es: ${codigoRecuperacion}`,
        };
  
        // Envía el correo
        await transporter.sendMail(mailOptions);
  
        console.log(`Código ${codigoRecuperacion} enviado al correo ${correo}`);
        return true;
      } else {
        console.log(`No se encontró el usuario con el correo ${correo}`);
        return false;
      }
    } catch (error) {
      console.error("Error al generar y enviar código de recuperación:", error);
      throw error;
    }
  };

  export const verificarCodigo = async (correo, codigo) => {
    try {
      // Obtén el usuario por su correo
      const usuario = await Auth.findOne({ where: { correo } });
  
      // Verifica si el usuario existe y si el código coincide y no ha expirado
      if (
        usuario &&
        usuario.codigoRecuperacion === codigo &&
        usuario.codigoRecuperacionExpiracion > Date.now()
      ) {
        // Código válido
        console.log(`Código ${codigo} verificado para el correo ${correo}`);
        return true;
      } else {
        // Código inválido o expirado
        console.log(`Código inválido o expirado para el correo ${correo}`);
        return false;
      }
    } catch (error) {
      console.error("Error al verificar código de recuperación:", error);
      throw error;
    }
  };