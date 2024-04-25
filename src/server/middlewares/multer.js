const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Directorio de destino para las imágenes subidas
const uploadDirectory = path.join(__dirname, '../public/uploads');

// Verificar si el directorio de carga existe, y créalo si no
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configuración del almacenamiento de Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDirectory); // Utiliza el directorio de carga
//     },
//     filename: (req, file, cb) => {
//         // Genera un nombre único para el archivo
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         const extension = path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + uniqueSuffix + extension);
//     }
// });
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory); // Utiliza el directorio de carga
    },
    filename: (req, file, cb) => {
        // Verifica si el tipo de archivo es una imagen
        const isImage = file.mimetype.startsWith('image/');

        // Si es una imagen, genera un nombre único para el archivo
        if (isImage) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const extension = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix + extension);
        } else {
            // Si no es una imagen, utiliza el nombre original del archivo
            cb(null, file.originalname);
        }
    }
});


// Configuración de la función de filtrado de archivos (solo imágenes)
const fileFilter = (req, file, cb) => {
    // Verifica el tipo de archivo permitido (ejemplo: imágenes, PDF, Word, PowerPoint, Excel)
    const allowedFileTypes = [
        'image/',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];
    
    if (allowedFileTypes.some(fileType => file.mimetype.startsWith(fileType))) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de archivo no válido'));
    }
};

// Configuración del middleware de Multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
