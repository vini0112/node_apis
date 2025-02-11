import Router from 'express'
const router = Router()

import bendixController from '../app/controllers/sessao_partida/bendix.controller.js'
import portaEscovasController from '../app/controllers/sessao_partida/portaEscovas.controller.js'
import acessoriosMotorPartidaController from '../app/controllers/sessao_partida/acessoriosMotorPartida.controller.js'


// get
router.get('/bendix', bendixController.show)
router.get('/portaEscovas',  portaEscovasController.show)
router.get('/acessoriosMotorPart', acessoriosMotorPartidaController.show)

// get
router.get('/bendix/:id', bendixController.showById)
router.get('/portaEscovas/:id',  portaEscovasController.showById)
router.get('/acessoriosMotorPart/:id', acessoriosMotorPartidaController.showById)

// post
router.post('/bendix', bendixController.postando)
router.post('/portaEscovas', portaEscovasController.postando)
router.post('/acessoriosMotorPart', acessoriosMotorPartidaController.postando)

// put
router.put('/bendix/:id', bendixController.update)
router.put('/portaEscovas/:id', portaEscovasController.update)
router.put('/acessoriosMotorPart/:id', acessoriosMotorPartidaController.update)

// delete 
router.delete('/bendix/:id', bendixController.deleting)
router.delete('/portaEscovas/:id', portaEscovasController.deleting)
router.delete('/acessoriosMotorPart/:id', acessoriosMotorPartidaController.deleting)

export default router;