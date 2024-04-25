const protegerRuta = (req, res, next) => {
    if (req.session.user) {
      // El usuario está autenticado, puede acceder a la ruta
      next();
    } else {
      // Redirigir al usuario a la página de inicio de sesión
      res.redirect('/login');
    }
  };
  
  // ...
  module.exports={ protegerRuta }  