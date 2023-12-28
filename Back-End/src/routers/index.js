import {Router} from 'express'
import * as userController from '../controllers/userController.js'
import * as clientController from '../controllers/clientsController.js'

const router = Router()


// Rotas para Login, Registro e Recuperação de senha
router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/recovery', userController.recovery)
router.post('/profile', userController.profile)

//Rotas para o client

router.get('/clients', clientController.getAllClients)
router.post('/client/new', clientController.newClient)
router.delete('/client/delete:id', clientController.deleteClient)
router.put('/client/put', clientController.putClient)


export default router