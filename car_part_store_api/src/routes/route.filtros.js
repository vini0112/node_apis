import Router from "express";

const router = Router()


// controllers
import filtrosOleoSimpController from "../app/controllers/sessao_filtros/filtrosOleoSimp.controller.js";
import filtrosOleoPesadoController from "../app/controllers/sessao_filtros/filtrosOleoPesado.controller.js";
import filtrosCombustSimplesController from "../app/controllers/sessao_filtros/filtrosCombustSimples.controller.js";
import filtrosCombustPesadoController from "../app/controllers/sessao_filtros/filtrosCombustPesado.controller.js";
import filtrosArController from "../app/controllers/sessao_filtros/filtrosAr.controller.js";
import mangotesArController from "../app/controllers/sessao_filtros/mangotesAr.controller.js";


// get
router.get('/filtroOleoSimples', filtrosOleoSimpController.show)
router.get('/filtroOleoPesado', filtrosOleoPesadoController.show)
router.get('/filtroCombustSimples', filtrosCombustSimplesController.show)
router.get('/filtroCombustPesado', filtrosCombustPesadoController.show)
router.get('/filtroArMotor', filtrosArController.show)
router.get('/mangoteAR', mangotesArController.show)




// get by  id
router.get('/filtroOleoSimples/:id', filtrosOleoSimpController.showById)
router.get('/filtroOleoPesado/:id', filtrosOleoPesadoController.showById)
router.get('/filtroCombustSimples/:id', filtrosCombustSimplesController.showById)
router.get('/filtroCombustPesado/:id', filtrosCombustPesadoController.showById)
router.get('/filtroArMotor/:id', filtrosArController.showById)
router.get('/mangoteAR/:id', mangotesArController.showById)


// post
router.post('/filtroOleoSimples', filtrosOleoSimpController.postando)
router.post('/filtroOleoPesado', filtrosOleoPesadoController.postando)
router.post('/filtroCombustSimples', filtrosCombustSimplesController.postando)
router.post('/filtroCombustPesado', filtrosCombustPesadoController.postando)
router.post('/filtroArMotor', filtrosArController.postando)
router.post('/mangoteAR', mangotesArController.postando)

// put
router.put('/filtroOleoSimples/:id', filtrosOleoSimpController.update)
router.put('/filtroOleoPesado/:id', filtrosOleoPesadoController.update)
router.put('/filtroCombustSimples/:id', filtrosCombustSimplesController.update)
router.put('/filtroCombustPesado/:id', filtrosCombustPesadoController.update)
router.put('/filtroArMotor/:id', filtrosArController.update)
router.put('/mangoteAR/:id', mangotesArController.update)

// delete
router.delete('/filtroOleoSimples/:id', filtrosOleoSimpController.deleting)
router.delete('/filtroOleoPesado/:id', filtrosOleoPesadoController.deleting)
router.delete('/filtroCombustSimples/:id', filtrosCombustSimplesController.deleting)
router.delete('/filtroCombustPesado/:id', filtrosCombustPesadoController.deleting)
router.delete('/filtroArMotor/:id', filtrosArController.deleting)
router.delete('/mangoteAR/:id', mangotesArController.deleting)


export default router;
