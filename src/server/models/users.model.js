const { DataTypes, sequelize } = require('../config/db');
const { encriptar, comparar } = require('../helpers/encriptar');
const { Op } = require('sequelize');
const Rol = require("./roles.model")

//CREAR MODELO DE USER
const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El usuario ya existe'
        }
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            messge: 'El email ya existe'
        }
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_rol: {
        type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false,
    paranoid: false,
    tableName: "User",
    modelName: "User"
});

User.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})

//SERVICIOS

//CREA USUARIO EN LA DB
async function createUser(data) {
    try {
        //COMPROBAR SI EXISTEN REGISTROS
        const existeUsername = await User.findOne({
            where: {
                user_name: data.user_name
            }
        })

        const existeEmail = await User.findOne({
            where: {
                user_email: data.user_email
            }
        })

        if (existeEmail) {
            throw new Error("El email ya esta registrado")
        } else {
            if (existeUsername) {
                throw new Error("El username ya esta registrado")
            }
        }

        //ENCRIPTAR LA PASSWORD
        const hashedPass = await encriptar(data.user_password)

        return await User.create({
            user_name: data.user_name,
            user_email: data.user_email,
            user_password: hashedPass,
            id_rol: data.id_rol,
        });

    } catch (error) {
        console.error("error")
        throw error
    }
}

//BUSCAR USUARIO POR EMAIL
async function findUserByEmail(value) {
    return await User.findOne({
        where: { user_email: value }
    })
}

//BUSCAR USUARIO POR NOMBRE DE USUARIO
async function findUserByUserName(value) {
    return await User.findOne({
        where: { user_name: value }
    })
}

//BUSCAR POR EMAIL O USERNAME
async function findUserByEmailOrUsername(form) {
    return await User.findOne({
        where: {
            [Op.or]: [
                { user_name: form.user_name },
                { user_email: form.user_name }
            ]
        }
    });
}

//FIND ONE USER IN DB
async function findUserById(data) {
    try {
        return await User.findByPk(data.id_user) ?? null

    } catch (error) {
        console.log("Error al encontrar usuario")
    }
};

//FIND ALL USERS IN DB
async function findAllUser() {
    try {
        return await User.findAll({
            where: { estado: true },
            attributes: { exclude: ['user_password', 'estado', 'id_rol'] },
            include: [{
                model: Rol, // Modelo relacionado
                attributes: ['rol_name']
            }]
        })

    } catch (error) {
        console.log("Error al encontrar usuarios", error)
    }
};

//BUSCAR POR ROL
async function findUserByRole(value) {
    try {
        return await User.findOne({
            where: { id_rol: value }
        })
    } catch (error) {
        console.log("Error al encontrar usuario por rol", error)
    }
}

//ACTUALIZAR USUARIO
async function actualizarUsuario(data) {
    try {

        //SI HAY NUEVA CONTRASEÑA
        if (data.validarPass) {

            const { user_password } = await User.findByPk(data.id_user)
            const sameNameEmail = await User.findAll({
                where: {
                    [Op.or]: [
                        { user_name: data.user_name },
                        { user_email: data.user_email }
                    ]
                }
            })

            let moreThanOne = false

            if (sameNameEmail.length > 1) {
                moreThanOne = true
                throw new Error("El nombre usuario o email ya esta ocupado")
            }

            //COMPARAR LAS CONTRASEÑAS
            const samePass = await comparar(data.user_password, user_password)

            if (samePass && moreThanOne == false) {

                const hashedPass = await encriptar(data.validarPass)

                const updatedUser = await User.update({
                    user_name: data.user_name,
                    user_email: data.user_email,
                    user_password: hashedPass,
                }, {
                    where: {
                        id_user: data.id_user
                    }
                })
                return updatedUser;
            } else {
                throw new Error("Las contraseña no coincide o el nombre de usuario/email ya existe")
            }
        } else {
            //SI NO HAY NUEVA CONTRASEÑAf 

            const { user_password } = await User.findByPk(data.id_user)
            const sameNameEmail = await User.findAll({

                where: {
                    [Op.or]: [
                        { user_name: data.user_name },
                        { user_email: data.user_email }
                    ]
                }
            })

            let moreThanOne = false

            if (sameNameEmail.length > 1) {
                moreThanOne = true
                throw new Error("El nombre usuario o email ya esta ocupado")
            }

            //COMPARAR LAS CONTRASEÑAS
            const samePass = await comparar(data.user_password, user_password)

            if (samePass && moreThanOne == false) {

                const updatedUser = await User.update({
                    user_name: data.user_name,
                    user_email: data.user_email,
                }, {
                    where: {
                        id_user: data.id_user
                    }
                })
                return updatedUser;
            } else {
                throw new Error("Las contraseña no coincide o el nombre de usuario/email ya existe")
            }
        }
    } catch (error) {
        console.log("Error al encontrar usuario", error);
    }
}

//ELIMINAR USUARIO LOGICAMENTE
async function deleteUser(user_id) {
    try {
        const deletedUser = await User.findByPk(user_id);

        if (!deletedUser) {
            console.log("El usuario que estás tratando de eliminar no existe");
            return; // Salir de la función si el usuario no existe
        }

        return await deletedUser.update({
            estado: 0 // Cambia 'where' por 'estado' para marcar el usuario como eliminado
        });

    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
}

//BUSCAR POR NOMBRE APROX
async function findUserByName(data) {

    try {
        if (data.user_name != "") {
            const nameAprox = await User.findAll({
                where: {
                    user_name: {
                        [Op.like]: `%${data.user_name}%`
                    },
                },
            })
            return nameAprox;
        } else {
            return ""
        }
    } catch (error) {
        console.log("Error al encontrar usuario ", error);
        throw new Error
    }
}

//DESTRUIR USUARIO
async function destroyUser(data) {
    try {

        return await User.destroy({
            where: {
                id_user: data.id_user
            }
        })

    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
}

//RESTAURAR CONTRASEÑAS
async function restorePassword(id_user, newPass) {
    try {
        const hashedPass = await encriptar(newPass)

        return await User.update({
            user_password: hashedPass,
        }, {
            where: {
                id_user: id_user
            }
        })

    } catch (error) {
        console.log("Error al actualizar contraseña", error);
    }
}


module.exports = {
    User, createUser, findUserByEmail, findUserByUserName, findUserByEmailOrUsername,
    findAllUser, findUserByRole, deleteUser,
    actualizarUsuario, findUserByName, findUserById, destroyUser, restorePassword
}