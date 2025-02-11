import Router from "express"
const router = Router()



import pastilhasController from "../app/controllers/freios/pastilhas.controller.js"
import discosFreioController from "../app/controllers/freios/discosFreio.controller.js"
import sapatasController from '../app/controllers/freios/sapatas.controller.js'
import tamboresController from "../app/controllers/freios/tambores.controller.js"
import cilindrosController from "../app/controllers/freios/cilindros.controller.js"
import reparosFreiosController from "../app/controllers/freios/reparosFreios.controller.js"
import cabosEflexiveisController from "../app/controllers/freios/cabosEflexiveis.controller.js"
import acessoriosFreioController from "../app/controllers/freios/acessoriosFreio.controller.js"




// get by id
router.get('/pastilhaFreio/:id', pastilhasController.showById)
router.get('/discosFreio/:id', discosFreioController.showById)
router.get('/sapatasFreio/:id', sapatasController.showById)
router.get('/cilindros/:id', cilindrosController.showById)
router.get('/tamboresFreio/:id', tamboresController.showById)
router.get('/reparosFreio/:id', reparosFreiosController.showById)
router.get('/cabosEflexiveis/:id', cabosEflexiveisController.showById)
router.get('/acessoriosFreio/:id', acessoriosFreioController.showById)

// get
router.get('/pastilhaFreio', pastilhasController.show)
router.get('/discosFreio', discosFreioController.show)
router.get('/sapatasFreio', sapatasController.show)
router.get('/cilindros', cilindrosController.show)
router.get('/tamboresFreio', tamboresController.show)
router.get('/reparosFreio', reparosFreiosController.show)
router.get('/cabosEflexiveis', cabosEflexiveisController.show)
router.get('/acessoriosFreio', acessoriosFreioController.show)

// post
router.post('/pastilhaFreio', pastilhasController.postando)
router.post('/discosFreio', discosFreioController.postando)
router.post('/sapatasFreio',sapatasController.postando)
router.post('/cilindros', cilindrosController.postando)
router.post('/tamboresFreio', tamboresController.postando)
router.post('/reparosFreio', reparosFreiosController.postando)
router.post('/cabosEflexiveis', cabosEflexiveisController.postando)
router.post('/acessoriosFreio', acessoriosFreioController.postando)

// put
router.put('/pastilhaFreio/:id', pastilhasController.update)
router.put('/discosFreio/:id', discosFreioController.update)
router.put('/sapatasFreio/:id', sapatasController.update)
router.put('/cilindros/:id', cilindrosController.update)
router.put('/tamboresFreio/:id', tamboresController.update)
router.put('/reparosFreio/:id', reparosFreiosController.update)
router.put('/cabosEflexiveis/:id', cabosEflexiveisController.update)
router.put('/acessoriosFreio/:id', acessoriosFreioController.update)

// delete
router.delete('/pastilhaFreio/:id', pastilhasController.deleting)
router.delete('/discosFreio/:id', discosFreioController.deleting)
router.delete('/sapatasFreio/:id', sapatasController.deleting)
router.delete('/cilindros/:id', cilindrosController.deleting)
router.delete('/tamboresFreio/:id', tamboresController.deleting)
router.delete('/reparosFreio/:id', reparosFreiosController.deleting)
router.delete('/cabosEflexiveis/:id', cabosEflexiveisController.deleting)
router.delete('/acessoriosFreio/:id', acessoriosFreioController.deleting)

export default router;

