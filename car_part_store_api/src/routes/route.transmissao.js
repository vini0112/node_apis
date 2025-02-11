import { Router } from "express";
const router = Router()

import discosEmbreagemController from "../app/controllers/sessao_transmissao/discosEmbreagem.controller.js";
import reparoCambioTrambuController from "../app/controllers/sessao_transmissao/reparoCambioTrambu.controller.js";


// get 
router.get('/discosEmbreagem', discosEmbreagemController.show)
router.get('/reparoCambioTrabulador', reparoCambioTrambuController.show)

// get 
router.get('/discosEmbreagem/:id', discosEmbreagemController.showById)
router.get('/reparoCambioTrabulador/:id', reparoCambioTrambuController.showById)

// post 
router.post('/discosEmbreagem', discosEmbreagemController.postando)
router.post('/reparoCambioTrabulador', reparoCambioTrambuController.postando)


// put 
router.put('/discosEmbreagem/:id', discosEmbreagemController.update)
router.put('/reparoCambioTrabulador/:id', reparoCambioTrambuController.update)

// delete
router.delete('/discosEmbreagem/:id', discosEmbreagemController.deleting)
router.delete('/reparoCambioTrabulador/:id', reparoCambioTrambuController.deleting)


export default router
