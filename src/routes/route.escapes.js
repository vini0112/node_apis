import { Router } from "express";
const router = Router()


import acessoriosEscapesController from "../app/controllers/sessao_escapes/acessoriosEscapes.controller.js";
import coxinsEscapesController from "../app/controllers/sessao_escapes/coxinsEscapes.controller.js";
import intermediariosController from "../app/controllers/sessao_escapes/intermediarios.controller.js";
import bojosController from "../app/controllers/sessao_escapes/bojos.controller.js";



// get 
router.get('/bojosTras/:id', bojosController.showById)
router.get('/canosIntermediario/:id' , intermediariosController.showById)
router.get('/coxinsEscap/:id' , coxinsEscapesController.showById)
router.get('/acessoriosEscap/:id' , acessoriosEscapesController.showById)

// post
router.post('/bojosTras', bojosController.postando)
router.post('/canosIntermediario', intermediariosController.postando)
router.post('/coxinsEscap', coxinsEscapesController.postando)
router.post('/acessoriosEscap', acessoriosEscapesController.postando)

// put
router.put('/bojosTras/:id', bojosController.update)
router.put('/canosIntermediario/:id', intermediariosController.update)
router.put('/coxinsEscap/:id', coxinsEscapesController.update)
router.put('/acessoriosEscap/:id', acessoriosEscapesController.update)

// delete
router.delete('/bojosTras/:id', bojosController.deleting)
router.delete('/canosIntermediario/:id', intermediariosController.deleting)
router.delete('/coxinsEscap/:id', coxinsEscapesController.deleting)
router.delete('/acessoriosEscap/:id', acessoriosEscapesController.deleting)

export default router

