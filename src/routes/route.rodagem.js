import Router from 'express'
const router = Router()


import rolamentosDiversosController from '../app/controllers/sessao_rodagem/rolamentosDiversos.controller.js'
import pontasEixoController from '../app/controllers/sessao_rodagem/pontasEixo.controller.js'
import rolamentosRodaController from '../app/controllers/sessao_rodagem/rolamentosRoda.controller.js'
import cubosRodaController from '../app/controllers/sessao_rodagem/cubosRoda.controller.js'
import homocineticasController from '../app/controllers/sessao_rodagem/homocineticas.controller.js'



// get 
router.get('/cubosRoda/:id', cubosRodaController.showById)
router.get('/pontasEixo/:id', pontasEixoController.showById)
router.get('/juntasHomocinetica/:id', homocineticasController.showById)
router.get('/rolamentosRoda/:id', rolamentosRodaController.showById)
router.get('/rolamentoDiversos/:id', rolamentosDiversosController.showById)

// post 
router.post('/cubosRoda', cubosRodaController.postando)
router.post('/pontasEixo', pontasEixoController.postando)
router.post('/juntasHomocinetica', homocineticasController.postando)
router.post('/rolamentosRoda', rolamentosRodaController.postando)
router.post('/rolamentoDiversos', rolamentosDiversosController.postando)


// put 
router.put('/cubosRoda/:id', cubosRodaController.update)
router.put('/pontasEixo/:id', pontasEixoController.update)
router.put('/juntasHomocinetica/:id', homocineticasController.update)
router.put('/rolamentosRoda/:id', rolamentosRodaController.update)
router.put('/rolamentoDiversos/:id', rolamentosDiversosController.update)

// delete
router.delete('/cubosRoda/:id', cubosRodaController.deleting)
router.delete('/pontasEixo/:id', pontasEixoController.deleting)
router.delete('/juntasHomocinetica/:id', homocineticasController.deleting)
router.delete('/rolamentosRoda/:id', rolamentosRodaController.deleting)
router.delete('/rolamentoDiversos/:id', rolamentosDiversosController.deleting)

export default router