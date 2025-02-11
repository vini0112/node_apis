
import Router from 'express'
const router = Router()



import correiaAlterController from '../app/controllers/sessao_carga/correiaAlter.controller.js'
import correiaDentController from '../app/controllers/sessao_carga/correiaDent.controller.js'
import estatoresController from '../app/controllers/sessao_carga/estatores.controller.js'
import reguladorVoltController from '../app/controllers/sessao_carga/reguladorVolt.controller.js'
import tensoresCorreiaController from '../app/controllers/sessao_carga/tensoresCorreia.controller.js'



// get
router.get('/tensoresCorreia', tensoresCorreiaController.show)
router.get('/correiaAlternador', correiaAlterController.show)
router.get('/correiasDentada', correiaDentController.show)
router.get('/reguladorVolt', reguladorVoltController.show)
router.get('/estatores', estatoresController.show)

// get
router.get('/tensoresCorreia/:id', tensoresCorreiaController.showById)
router.get('/correiaAlternador/:id', correiaAlterController.showById)
router.get('/correiasDentada/:id', correiaDentController.showById)
router.get('/reguladorVolt/:id', reguladorVoltController.showById)
router.get('/estatores/:id', estatoresController.showById)

// post
router.post('/tensoresCorreia', tensoresCorreiaController.postando)
router.post('/correiaAlternador', correiaAlterController.postando)
router.post('/correiasDentada', correiaDentController.postando)
router.post('/reguladorVolt', reguladorVoltController.postando)
router.post('/estatores', estatoresController.postando)

// put
router.put('/tensoresCorreia/:id', tensoresCorreiaController.update)
router.put('/correiaAlternador/:id', correiaAlterController.update)
router.put('/correiasDentada/:id', correiaDentController.update)
router.put('/reguladorVolt/:id', reguladorVoltController.update)
router.put('/estatores/:id', estatoresController.update)

// delete
router.delete('/tensoresCorreia/:id', tensoresCorreiaController.deleting)
router.delete('/correiaAlternador/:id', correiaAlterController.deleting)
router.delete('/correiasDentada/:id', correiaDentController.deleting)
router.delete('/reguladorVolt/:id', reguladorVoltController.deleting)
router.delete('/estatores/:id', estatoresController.deleting)

export default router;
