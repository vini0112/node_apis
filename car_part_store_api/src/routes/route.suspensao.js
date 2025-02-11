import { Router } from "express";
const router = Router()

import batedorController from "../app/controllers/suspensao/batedor.controller.js";
import pivosController from "../app/controllers/suspensao/pivos.controller.js";
import amortecedoresController from "../app/controllers/suspensao/amortecedores.controller.js";
import buchaSuspController from "../app/controllers/suspensao/buchaSusp.controller.js";
import coxinsAmortController from "../app/controllers/suspensao/coxinsAmort.controller.js";
import bieletasController from "../app/controllers/suspensao/bieletas.controller.js";


// get
router.get('/batedores', batedorController.show)
router.get('/pivos', pivosController.show)
router.get('/amortecedores', amortecedoresController.show)
router.get('/buchaSusp', buchaSuspController.show)
router.get('/coxinsAmort', coxinsAmortController.show)
router.get('/bieletas', bieletasController.show)

// get by id
router.get('/batedores/:id', batedorController.showById)
router.get('/pivos/:id', pivosController.showById)
router.get('/amortecedores/:id', amortecedoresController.showById)
router.get('/buchaSusp/:id', buchaSuspController.showById)
router.get('/coxinsAmort/:id', coxinsAmortController.showById)
router.get('/bieletas/:id', bieletasController.showById)


// post
router.post('/batedores', batedorController.postando)
router.post('/pivos', pivosController.postando)
router.post('/amortecedores', amortecedoresController.postando)
router.post('/buchaSusp', buchaSuspController.postando)
router.post('/coxinsAmort', coxinsAmortController.postando)
router.post('/bieletas', bieletasController.postando)

// put
router.put('/batedores/:id', batedorController.update)
router.put('/pivos/:id', pivosController.update)
router.put('/amortecedores/:id', amortecedoresController.update)
router.put('/buchaSusp/:id', buchaSuspController.update)
router.put('/coxinsAmort/:id', coxinsAmortController.update)
router.put('/bieletas/:id', bieletasController.update)


// delete
router.delete('/batedores/:id', batedorController.deleting)
router.delete('/pivos/:id', pivosController.deleting)
router.delete('/amortecedores/:id', amortecedoresController.deleting)
router.delete('/buchaSusp/:id', buchaSuspController.deleting)
router.delete('/coxinsAmort/:id', coxinsAmortController.deleting)
router.delete('/bieletas/:id', bieletasController.deleting)

export default router;