const bcrypt = require('bcrypt'); //LIBRERIOA PARA ENCRIPTAR


//ENCRIPTA LA PASSWORD
const encriptar = async (textPlain) => {
   return await bcrypt.hash(textPlain, 10) 
    
}

//ENCRIPTA LA PASSWORD PLANA CON EL HASH
const comparar = async (contraseñaPlana, hashContraseña) => {
    return await bcrypt.compare(contraseñaPlana, hashContraseña)
}

module.exports = {  
    encriptar,
    comparar
}