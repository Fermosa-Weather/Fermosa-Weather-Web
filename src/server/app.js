const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require("cookie-parser");
const { createLogs, path } = require("./helpers/createLogs")
const environments = require("./config/environment")
const { createServer } = require('node:http');
const { conectarDB } = require('./config/db');
const { socketFunction } = require("./helpers/socketio")

//MODELO DE PLANTILLAS
require('ejs');
//MODELOS DE LA DB
require("./models/relaciones.model")

// INICIALIZACION DE EXPRESS
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // Algunos navegadores devuelven un código de estado como 204
};

app.use(cors(corsOptions));

app.use(helmet({
    contentSecurityPolicy: false,
}));

const server = createServer(app)

//MIDDLEWARES
//PARA LA CONSOLA
app.use(morgan('dev'));
//LOGS
app.use(morgan('combined', {
    stream: {
        write: (message) => {
            createLogs(message, __dirname, "logs")
        }
    }
}));
app.use(express.json());
app.use(cookieParser(
    process.env.SECRET_KEY,
    {
        sameSite: 'none',
    }
));
app.use(express.urlencoded({ extended: true }));

socketFunction(server)

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', (__dirname + '/views'));

// RUTAS
app.use(require('./routes/vistas.routes'));
app.use(require('./routes/registro.routes'));
app.use(require('./routes/posts.routes'));
app.use(require('./routes/principal.routes'));
app.use(require('./routes/files.routes'));
app.use(require('./routes/usuario.routes'))
app.use(require('./routes/info.routes'))

//EJS 404 - not found
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "PAGINA NO ENCONTRADA, REDIRIGIENDO A LA PAGINA DE INICIO..."
    })
});

//LEVANTAR EL SERVIDOR
server.listen(environments.PORT, () => {
    //CONECTAR A LA DB
    conectarDB();
    console.log(`SERVIDOR EJECUTANDOSE EN EL PUERTO: ${environments.PORT}`);
});