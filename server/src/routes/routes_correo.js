import  Router  from 'express'
import { enviarCorreoSoporte, getAllCorreosEnviados, GenerarEnviarCodigo, verificarCodigoController} from '../controllers/controllers_correo.js'

export const routes_correo = Router()

routes_correo.get('/all', getAllCorreosEnviados);

routes_correo.post('/codigo', GenerarEnviarCodigo);

routes_correo.post('/verificar_codigo', verificarCodigoController);

routes_correo.post('/', enviarCorreoSoporte);
