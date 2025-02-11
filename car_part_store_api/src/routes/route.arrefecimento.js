import Router from 'express'
const router = Router()

import bombadaguaController from '../app/controllers/sessao_arrefecimento/bombadagua.controller.js'
import reservatorioController from '../app/controllers/sessao_arrefecimento/reservatorio.controller.js'
import valvulasTermoController from '../app/controllers/sessao_arrefecimento/valvulasTermo.controller.js'
import eletroventiladorController from '../app/controllers/sessao_arrefecimento/eletroventilador.controller.js'
import canosDaguaController from '../app/controllers/sessao_arrefecimento/canosDagua.controller.js'
import tubosDaguaController from '../app/controllers/sessao_arrefecimento/tubosDagua.controller.js'
import resistenciaEletroController from '../app/controllers/sessao_arrefecimento/resistenciaEletro.controller.js'
import diversasArrefeciController from '../app/controllers/sessao_arrefecimento/diversasArrefeci.controller.js'



// get
router.get('/bombasDgua', bombadaguaController.show)
router.get('/reservatorioDagua', resistenciaEletroController.show)
router.get('/valvulasTermo', valvulasTermoController.show)
router.get('/eletroventiladores', eletroventiladorController.show)
router.get('/canosDagua', canosDaguaController.show)
router.get('/tubosDagua', tubosDaguaController.show)
router.get('/resistenciaEletro', resistenciaEletroController.show)
router.get('/diversasArrefeci', diversasArrefeciController.show)

// get
router.get('/bombasDgua/:id', bombadaguaController.showById)
router.get('/reservatorioDagua/:id', resistenciaEletroController.showById)
router.get('/valvulasTermo/:id', valvulasTermoController.showById)
router.get('/eletroventiladores/:id', eletroventiladorController.showById)
router.get('/canosDagua/:id', canosDaguaController.showById)
router.get('/tubosDagua/:id', tubosDaguaController.showById)
router.get('/resistenciaEletro/:id', resistenciaEletroController.showById)
router.get('/diversasArrefeci/:id', diversasArrefeciController.showById)


// post

router.post('/bombasDgua', bombadaguaController.postando)
router.post('/reservatorioDagua', reservatorioController.postando)
router.post('/valvulasTermo', valvulasTermoController.postando)
router.post('/eletroventiladores', eletroventiladorController.postando)
router.post('/canosDagua', canosDaguaController.postando)
router.post('/tubosDagua', tubosDaguaController.postando)
router.post('/resistenciaEletro', resistenciaEletroController.postando)
router.post('/diversasArrefeci', diversasArrefeciController.postando)

// put
router.put('/bombasDgua/:id', bombadaguaController.update)
router.put('/reservatorioDagua/:id', reservatorioController.update)
router.put('/valvulasTermo/:id', valvulasTermoController.update)
router.put('/eletroventiladores/:id', eletroventiladorController.update)
router.put('/canosDagua/:id', canosDaguaController.update)
router.put('/tubosDagua/:id', tubosDaguaController.update)
router.put('/resistenciaEletro/:id', resistenciaEletroController.update)
router.put('/diversasArrefeci/:id', diversasArrefeciController.update)


// delete 
router.delete('/bombasDgua/:id', bombadaguaController.deleting)
router.delete('/reservatorioDagua/:id', reservatorioController.deleting)
router.delete('/valvulasTermo/:id', valvulasTermoController.deleting)
router.delete('/eletroventiladores/:id', eletroventiladorController.deleting)
router.delete('/canosDagua/:id', canosDaguaController.deleting)
router.delete('/tubosDagua/:id', tubosDaguaController.deleting)
router.delete('/resistenciaEletro/:id', resistenciaEletroController.deleting)
router.delete('/diversasArrefeci/:id', diversasArrefeciController.deleting)

export default router;