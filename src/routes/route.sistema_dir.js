import { Router } from "express";

const router = Router()


import terminaisController from "../app/controllers/sistema_direcao/terminais.controller.js";
import barrasAxiaisController from "../app/controllers/sistema_direcao/barrasAxiais.controller.js";
import estabilizadoresController from "../app/controllers/sistema_direcao/estabilizadores.controller.js";
import buchaCaixaDirController from "../app/controllers/sistema_direcao/buchaCaixaDir.controller.js";


// get
router.get('/terminaisDirecao/:id', terminaisController.showById)
router.get('/barrasAxiais/:id', barrasAxiaisController.showById)
router.get('/estabilizadores/:id', estabilizadoresController.showById)
router.get('/BuchaCaixaDirecao/:id', buchaCaixaDirController.showById)


// post
router.post('/terminaisDirecao', terminaisController.postando)
router.post('/barrasAxiais', barrasAxiaisController.postando)
router.post('/estabilizadores', estabilizadoresController.postando)
router.post('/BuchaCaixaDirecao', buchaCaixaDirController.postando)


// put
router.put('/terminaisDirecao/:id', terminaisController.update)
router.put('/barrasAxiais/:id', barrasAxiaisController.update)
router.put('/estabilizadores/:id', estabilizadoresController.update)
router.put('/BuchaCaixaDirecao/:id', buchaCaixaDirController.update)


// delete
router.delete('/terminaisDirecao/:id', terminaisController.deleting)
router.delete('/barrasAxiais/:id', barrasAxiaisController.deleting)
router.delete('/estabilizadores/:id', estabilizadoresController.deleting)
router.delete('/BuchaCaixaDirecao/:id', buchaCaixaDirController.deleting)

export default router