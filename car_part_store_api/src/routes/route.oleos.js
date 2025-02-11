import Router from "express";


const router = Router()


// controllers 
import oleosController from "../app/controllers/sessao_oleos/oleos.controller.js";
import bateriasController from "../app/controllers/sessao_oleos/baterias.controller.js";
import fluidosController from "../app/controllers/sessao_oleos/fluidos.controller.js";


// get
router.get('/oleos', oleosController.show)
router.get('/baterias', bateriasController.show)
router.get('/fluidos', fluidosController.show)



// GET BY ID

router.get('/oleos/:id', oleosController.showById)
router.get('/baterias/:id', bateriasController.showById)
router.get('/fluidos/:id', fluidosController.showById)

// POST 
router.post('/oleos', oleosController.postOleos)
router.post('/baterias', bateriasController.postando)
router.post('/fluidos', fluidosController.postando)


// UPDATE 

router.put('/oleos/:id', oleosController.updateOleos)
router.put('/baterias/:id', bateriasController.update)
router.put('/fluidos/:id', fluidosController.update)

// DELETE 
router.delete('/oleos/:id', oleosController.deletingOleos)
router.delete('/baterias/:id', bateriasController.deleting)
router.delete('/fluidos/:id', fluidosController.deleting)

export default router;
