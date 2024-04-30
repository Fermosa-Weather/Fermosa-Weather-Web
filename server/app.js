import {app, port} from "./server.js"
import {sequelize} from "./src/database/db.js"
// import {associate} from "./src/asociacion/asociacion.js"

// import {routes_cliente} from './src/routes/routes_client.js';

// Routes
// app.use("/cliente", routes_cliente);
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
    // associate();
  })
  .catch((error) => {
    console.log("Se ha producido un error", error);
  });