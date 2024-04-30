// Imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import nodemailer from 'nodemailer';
import path,{dirname} from "path";
import { fileURLToPath } from "url";
import fileUpload from 'express-fileupload';
// import __dirname from './src/helpers/ruta.js';

export const app = express();
// const rutaActual = __dirname;
export const port = process.env.PORT || 3000;
// const rutaActual=dirname(fileURLToPath(import.meta.url))

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
// app.use('/producto_img', express.static(path.join(rutaActual, 'cliente/public/producto_img')));
// app.use('/img_foto', express.static(path.join(rutaActual, 'cliente/public/img_foto')));
// app.set("view engine", "ejs");
// app.set("views", path.join(rutaActual, "./src/views"));

