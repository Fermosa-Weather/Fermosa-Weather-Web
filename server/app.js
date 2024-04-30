import {app, port} from "./server.js"
import {sequelize} from "./src/database/db.js"
import {associate} from "./src/asociacion/asociacion.js"

import {routes_auth} from './src/routes/routes_auth.js';
import {routes_correo} from './src/routes/routes_correo.js';

// Routes
app.use("/auth", routes_auth);
app.use("/auth", routes_correo);

  // Listen
  app.listen(port, () => {
    console.log(`La app está escuchando en http://localhost:${process.env.PORT}` );
  });

// Conexion a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log("Nos hemos conectado a la base de datos");
    return sequelize.sync(); 
  })
  .then(() => {
    // dataPreloaded();
    associate();
  })
  .catch((error) => {
    console.log("Se ha producido un error", error);
  });