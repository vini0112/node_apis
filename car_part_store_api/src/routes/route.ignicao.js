import Router from 'express'
const router = Router()


import cabosVelaController from '../app/controllers/sessao_ignicao/cabosVela.controller.js'
import velasController from '../app/controllers/sessao_ignicao/velas.controller.js'
import bobinasController from '../app/controllers/sessao_ignicao/bobinas.controller.js'
import modulosIgnicaoController from '../app/controllers/sessao_ignicao/modulos.ignicao.controller.js'



// get
router.get('/cabosDvela', cabosVelaController.show)
router.get('/velas', velasController.show)
router.get('/bobinasIgnicao', bobinasController.show)
router.get('/modulosIgnicao', modulosIgnicaoController.show)

// get
router.get('/cabosDvela/:id', cabosVelaController.showById)
router.get('/velas/:id', velasController.showById)
router.get('/bobinasIgnicao/:id', bobinasController.showById)
router.get('/modulosIgnicao/:id', modulosIgnicaoController.showById)


// post
router.post('/cabosDvela', cabosVelaController.postando)
router.post('/velas', velasController.postando)
router.post('/bobinasIgnicao', bobinasController.postando)
router.post('/modulosIgnicao', modulosIgnicaoController.postando)

// put
router.put('/cabosDvela/:id', cabosVelaController.update)
router.put('/velas/:id', velasController.update)
router.put('/bobinasIgnicao/:id', bobinasController.update)
router.put('/modulosIgnicao/:id', modulosIgnicaoController.update)

// delete 
router.delete('/cabosDvela/:id', cabosVelaController.deleting)
router.delete('/velas/:id', velasController.deleting)
router.delete('/bobinasIgnicao/:id', bobinasController.deleting)
router.delete('/modulosIgnicao/:id', modulosIgnicaoController.deleting)

export default router;