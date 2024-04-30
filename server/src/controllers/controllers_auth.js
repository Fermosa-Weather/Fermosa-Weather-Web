import {getUserById, getAllUsers, getOneUser, EditOneUsers, 
    RegisterOneUsers, DeleteOneUsers, LoginOneUsers, Auth } from '../models/schemas/auth.js'
  import {hashPassword, comparePassword} from "../helpers/hash.js";
  import {generateToken, verifyToken} from "../helpers/jsonWenToken.js"
  
  
  export const ctrlGetUserInfoByToken = async (req, res) => {
    const tokenHeader = req.headers["authorization"];
    console.log("tokenHeader: ", tokenHeader);
  
    try {
      if (!tokenHeader) {
        return res.status(401).json({ message: "No existe un token" });
      }
  
      // Extraer el token sin el prefijo "Bearer"
      const token = tokenHeader.replace("Bearer ", "");
      console.log("token recibido: ", token);
  
      try {
        const decodedToken = verifyToken(token);
        console.log("token decodificado: ", decodedToken);
  
        const userId = decodedToken.id;
        const user = await getUserById(userId);
  
        if (!user) {
          return res.status(404).json({ message: "Usuario no encontrado" });
        }
  
        res.status(200).json(user);
      } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          console.error('Error al verificar el token:', error.message);
          return res.status(401).json({ message: 'Token inválido' });
        }
  
        console.error('Error interno del servidor:', error);
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
      }
    } catch (outerError) {
      console.error('Error general:', outerError);
      res.status(500).json({ message: 'Error interno del servidor', error: outerError.message });
    }
  };
  
  export const ctrlLoginUser = async (req, res) => {
    const { correo, password } = req.body;
    try {
      const user = await LoginOneUsers(correo);
      if (user) {
        const passwordMatch = await comparePassword(password, user.password);
        if (passwordMatch) {
          const token = generateToken({ id: user.id, correo: user.correo });
  
          res.status(200).json({
            // message: 'Autenticación exitosa',
            token,
          });
        } else {
          res.status(401).json({ message: 'Credenciales incorrectas' });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
    export const ctrlRegisterUser = async (req, res) => {
      const { correo, password } = req.body;
    
      try {
        const hashedPassword = await hashPassword(password);
    
        const newUser = await RegisterOneUsers(correo, hashedPassword);
    
        res.status(200).json({
          message: 'Usuario registrado exitosamente',
          user: newUser,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'no se pudo registrar el usuario' });
      }
    };
  
    export const editUser = async (req, res) => {
      const { correo } = req.body; // Obtén el correo desde req.body
      try {
        const updateUser = await Auth.findOne({ where: { correo } });
    
        if (!updateUser) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        if (req.body.password) {
          const hashedPassword = await hashPassword(req.body.password, 10);
          req.body.password = hashedPassword;
        }
    
        await updateUser.update(req.body);
    
        res.status(200).json({
          message: 'El usuario logeado se ha actualizado:',
          updateUser,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Error al actualizar este usuario logeado',
        });
      }
    };
  
    export const allUser=async(req, res)=>{
      try {
        const listaUsuarios= await getAllUsers();
      res.status(200).json({
        message:"Lista de usuarios logeados ",
        listaUsuarios
      })
      } catch (error) {
      res.status(500).json({
        message:"error la lista de usuarios "
      })
      }
    }
  
    export const oneUser=async(req, res)=>{
      const {id}=req.params;
      try {
        const unUsuario= await getOneUser(id)
      res.status(200).json({
        message:"el usuario logeado: ",
        unUsuario
      })
      } catch (error) {
      res.status(500).json({
        message:"error al obtener este usuario logeado "
      })
      }
    }
  
    export const deleteUser=async(req, res)=>{
      try {
          const {id}=req.params;
          if (!id){
              return res.status(400).json({
                  message:"no se pudo encontrar el id"
              })
          }
          const deleteClient=await DeleteOneUsers(id)
          await deleteClient.destroy({estado:true});
          return res.status(200).json({
              message:"Se elimino correctamente el usuario:",
              deleteClient
  
          })
      } catch (error) {
          return res.status(500).json({
              message:"no se elimino correctamente el usuario"
          })
      }
  }
  
  export const ctrlimagen = async (req, res) => {
    try {
      const {id}=req.params 
      const { fotoUser} = req.body;
  
      if (!req.files || !req.files.fotoUser) {
        return res.status(400).json({
            message: 'No se ha proporcionado una imagen de perfil.'
        });
    }
    const file = req.files.fotoUser;
    console.log("file", file);
  
    const fileName = file.name; 
  
    console.log("filename", fileName);
  
      const usuarioPerfil = await Auth.update(
        { fotoUser: fileName },
        { where: { id} }      
      );
  
        file.mv(`../cliente/public/img_foto/${fileName}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Error save archive' });
            }
            res.status(200).json({ message: 'Image upload', usuarioPerfil });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error upload image' });
    }
  };