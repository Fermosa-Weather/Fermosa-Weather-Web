const nodemailer = require("nodemailer");
require('dotenv').config();

async function enviarEmail(email, newPass) {
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //cambiar a futuro
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSWORDEMAIL
    },
    tls: {
      rejectUnauthorized: false //cambiar a futuro
    }
  };

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: process.env.USERMAIL,
    to: email,
    subject: "Codigo de verificación para restaurar su contraseña.",
    html: `<p>Su clave a sido restaurada correctamente, su nuevacontraseña para iniciar sesion es: </p>.<h4>${newPass}</h4>.<h4>¡Por favor cambiela al iniciar sesion!</h4>`
  }

  try {
    return await transporter.sendMail(message);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
}

//CONTACTO DE AYUDA
async function support(email, text, userName) {

  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, //cambiar a futuro
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSWORDEMAIL
    },
    tls: {
      rejectUnauthorized: false //cambiar a futuro
    }
  };

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: {email},
    to: process.env.USERMAIL,
    subject: `¡Hola!, soy el usuario ${userName}, con el email ${email} y solicito ayuda.`,
    html: `<h4>Mi problema es: </h4>
    <p>${text}</p>.`
  }

  try {
    return await transporter.sendMail(message);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
}

module.exports = {
  enviarEmail, support
};
