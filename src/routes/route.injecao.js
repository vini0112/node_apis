import Router from 'express'

const router = Router()

import bicosInjecaoController from '../app/controllers/sessao_injecao/bicosInjecao.controller.js'
import bombasCombustController from '../app/controllers/sessao_injecao/bombasCombust.controller.js'
import flangeBombaCombustController from '../app/controllers/sessao_injecao/flangeBombaCombust.controller.js'
import acessoriosCombustController from '../app/controllers/sessao_injecao/acessoriosCombust.controller.js'



// get 
router.get('/bicosInjecao/:id', bicosInjecaoController.showById)
router.get('/bombaCombust/:id', bombasCombustController.showById)
router.get('/flangeBombaCombust/:id', flangeBombaCombustController.showById)
router.get('/acessoriosCombust/:id', acessoriosCombustController.showById)


// post
router.post('/bicosInjecao', bicosInjecaoController.postando)
router.post('/bombaCombust', bombasCombustController.postando)
router.post('/flangeBombaCombust', flangeBombaCombustController.postando)
router.post('/acessoriosCombust', acessoriosCombustController.postando)

// put
router.put('/bicosInjecao/:id', bicosInjecaoController.deleting)
router.put('/bombaCombust/:id', bombasCombustController.deleting)
router.put('/flangeBombaCombust/:id', flangeBombaCombustController.deleting)
router.put('/acessoriosCombust/:id', acessoriosCombustController.deleting)


export default router;

