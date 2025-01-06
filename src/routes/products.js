
import Router from "express";
import {storage} from "../multerConfig.js";
import multer from "multer";

// controllers
import oleosController from "../app/controllers/oleos.controller.js";
import bateriasController from "../app/controllers/baterias.controller.js";
import fluidosController from "../app/controllers/fluidos.controller.js";
import filtrosOleoSimpController from "../app/controllers/filtrosOleoSimp.controller.js";



const router = Router()

// Configuração do Multer
const upload = multer({storage: storage,
    limits: {fileSize: 1500000},
})



// GET
router.get('/', oleosController.show)


// to upTimeRobot
router.get('/ping', (req, res) => {
    res.status(200).send('OK');
});





// GET BY IDS
router.get('/oleos/:id', oleosController.showById)

router.get('/baterias/:id', bateriasController.showById)
router.get('/fluidos/:id', fluidosController.showById)

// sessao filtros
router.get('/filtroOleoSimples/:id', filtrosOleoSimpController.showById)
router.get('/filtroOleoPesado/:id')
router.get('/filtroCombustSimples/:id')
router.get('/filtroCombustPesado/:id')
router.get('/filtroArMotor/:id')
router.get('/filtroArCabine/:id')
router.get('/mangoteAR/:id')

// sessao direcao
router.get('/terminaisDirecao/:id')
router.get('/barrasAxiais/:id')
router.get('/estabilizadores/:id')
router.get('/BuchaCaixaDirecao/:id')

// sessao suspensao
router.get('/batedores/:id')
router.get('/pivos/:id')
router.get('/amortecedores/:id')
router.get('/buchaSusp/:id')
router.get('/coxinsAmort/:id')
router.get('/bieletas/:id')

// sessao freios
router.get('/pastilhaFreio/:id')
router.get('/discosFreio/:id')
router.get('/sapatasFreio/:id')
router.get('/cilindros/:id')
router.get('/tamboresFreio/:id')
router.get('/reparosFreio/:id')
router.get('/cabosEflexiveis/:id')
router.get('/acessoriosFreio/:id')

// sessao ignicao
router.get('/cabosDvela/:id')
router.get('/velas/:id')
router.get('/bobinasIgnicao/:id')
router.get('/modulosIgnicao/:id')

// sessao carga
router.get('/tensoresCorreia/:id')
router.get('/correiaAlternador/:id')
router.get('/correiasDentada/:id')
router.get('/reguladorVolt/:id')
router.get('/estatores/:id')

// sessao partida
router.get('/bendix/:id')
router.get('/portaEscovas/:id')
router.get('/acessoriosMotorPart/:id')

// sessao arrefecimento
router.get('/bombasDgua/:id', )
router.get('/reservatorioDagua/:id', )
router.get('/valvulasTermo/:id', )
router.get('/eletroventiladores/:id', )
router.get('/canosDagua/:id', )
router.get('/tubosDagua/:id', )
router.get('/resistenciaEletro/:id', )
router.get('/diversasArrefeci/:id', )

// sessao injecao
router.get('/bicosInjecao/:id', )
router.get('/bombaCombust/:id', )
router.get('/flangeBombaCombust/:id', )
router.get('/acessoriosCombust/:id', )

// sessao transmissao
router.get('/discosEmbreagem/:id', )
router.get('/reparoCambioTrabulador/:id', )

// sessao rodagem
router.get('/cubosRoda/:id', )
router.get('/pontasEixo/:id', )
router.get('/juntasHomocinetica/:id', )
router.get('/rolamentosRoda/:id', )
router.get('/rolamentoDiversos/:id', )

// sessao escapes
router.get('/bojosTras/:id', )
router.get('/canosIntermediario/:id', )
router.get('/coxinsEscap/:id', )
router.get('/acessoriosEscap/:id', )






// POST
router.post('/oleos' , upload.single('image'), oleosController.postOleos)
router.post('/baterias', bateriasController.postando)
router.post('/fluidos', fluidosController.postando)

// sessao filtros
router.post('/filtroOleoSimples', filtrosOleoSimpController.postando)
router.post('/filtroOleoPesado',)
router.post('/filtroCombustSimples',)
router.post('/filtroCombustPesado',)
router.post('/filtroArMotor',)
router.post('/filtroArCabine',)
router.post('/mangoteAR',)

// sessao direcao
router.post('/terminaisDirecao',)
router.post('/barrasAxiais')
router.post('/estabilizadores',)
router.post('/BuchaCaixaDirecao',)

// sessao suspensao
router.post('/batedores',)
router.post('/pivos',)
router.post('/amortecedores',)
router.post('/buchaSusp',)
router.post('/coxinsAmort',)
router.post('/bieletas',)

// sessao freios
router.post('/pastilhaFreio',)
router.post('/discosFreio',)
router.post('/sapatasFreio',)
router.post('/cilindros',)
router.post('/tamboresFreio',)
router.post('/reparosFreio',)
router.post('/cabosEflexiveis',)
router.post('/acessoriosFreio',)

// sessao ignicao
router.post('/cabosDvela',)
router.post('/velas',)
router.post('/bobinasIgnicao',)
router.post('/modulosIgnicao',)

// sessao carga
router.post('/tensoresCorreia',)
router.post('/correiaAlternador',)
router.post('/correiasDentada',)
router.post('/reguladorVolt',)
router.post('/estatores',)

// sessao partida
router.post('/bendix',)
router.post('/portaEscovas',)
router.post('/acessoriosMotorPart',)

// sessao arrefecimento
router.post('/bombasDgua',)
router.post('/reservatorioDagua',)
router.post('/valvulasTermo',)
router.post('/eletroventiladores',)
router.post('/canosDagua',)
router.post('/tubosDagua',)
router.post('/resistenciaEletro',)
router.post('/diversasArrefeci',)

// sessao injecao
router.post('/bicosInjecao',)
router.post('/bombaCombust',)
router.post('/flangeBombaCombust',)
router.post('/acessoriosCombust',)

// sessao transmissao
router.post('/discosEmbreagem')
router.post('/reparoCambioTrabulador')

// sessao rodagem
router.post('/cubosRoda')
router.post('/pontasEixo')
router.post('/juntasHomocinetica')
router.post('/rolamentosRoda')
router.post('/rolamentoDiversos')

// sessao escapes
router.post('/bojosTras')
router.post('/canosIntermediario')
router.post('/coxinsEscap')
router.post('/acessoriosEscap')






// UPDATE
router.put('/oleos/:id', oleosController.updateOleos)
router.put('/baterias/:id', bateriasController.update)
router.put('/fluidos/:id', fluidosController.update)

// sessao filtros
router.put('/filtroOleoSimples/:id', filtrosOleoSimpController.update)
router.put('/filtroOleoPesado/:id')
router.put('/filtroCombustSimples/:id')
router.put('/filtroCombustPesado/:id')
router.put('/filtroArMotor/:id')
router.put('/filtroArCabine/:id')
router.put('/mangoteAR/:id')

// sessao de direcao
router.put('/terminaisDirecao/:id')
router.put('/barrasAxiais/:id')
router.put('/estabilizadores/:id')
router.put('/BuchaCaixaDirecao/:id')

// sessao suspensao 
router.put('/batedores/:id')
router.put('/pivos/:id')
router.put('/amortecedores/:id')
router.put('/buchaSusp/:id')
router.put('/coxinsAmort/:id')
router.put('/bieletas/:id')

// sessao freios
router.put('/pastilhaFreio/:id')
router.put('/discosFreio/:id')
router.put('/sapatasFreio/:id')
router.put('/cilindros/:id')
router.put('/tamboresFreio/:id')
router.put('/reparosFreio/:id')
router.put('/cabosEflexiveis/:id')
router.put('/acessoriosFreio/:id')

// sessao ignicao
router.put('/cabosDvela/:id')
router.put('/velas/:id')
router.put('/bobinasIgnicao/:id')
router.put('/modulosIgnicao/:id')

// sessao carga
router.put('/tensoresCorreia/:id')
router.put('/correiaAlternador/:id')
router.put('/correiasDentada/:id')
router.put('/reguladorVolt/:id')
router.put('/estatores/:id')

// sessao partida
router.put('/bendix/:id')
router.put('/portaEscovas/:id')
router.put('/acessoriosMotorPart/:id')

// sessao arrefecimento
router.put('/bombasDgua/:id')
router.put('/reservatorioDagua/:id')
router.put('/valvulasTermo/:id')
router.put('/eletroventiladores/:id')
router.put('/canosDagua/:id')
router.put('/tubosDagua/:id')
router.put('/resistenciaEletro/:id')
router.put('/diversasArrefeci/:id')

// sessao injecao
router.put('/bicosInjecao/:id')
router.put('/bombaCombust/:id')
router.put('/flangeBombaCombust/:id')
router.put('/acessoriosCombust/:id')

// sessao transmissao
router.put('/discosEmbreagem/:id')
router.put('/reparoCambioTrabulador/:id')

// sessao rodagem
router.put('/cubosRoda/:id')
router.put('/pontasEixo/:id')
router.put('/juntasHomocinetica/:id')
router.put('/rolamentosRoda/:id')
router.put('/rolamentoDiversos/:id')

// sessao escapes
router.put('/bojosTras/:id')
router.put('/canosIntermediario/:id')
router.put('/coxinsEscap/:id')
router.put('/acessoriosEscap/:id')






// DELETE
router.delete('/oleos/:id', oleosController.deletingOleos)
router.delete('/baterias/:id', bateriasController.deleting)
router.delete('/fluidos/:id', fluidosController.deleting)

// sessao filtros
router.delete('/filtroOleoSimples/:id', filtrosOleoSimpController.deleting)
router.delete('/filtroOleoPesado/:id')
router.delete('/filtroCombustSimples/:id')
router.delete('/filtroCombustPesado/:id')
router.delete('/filtroArMotor/:id')
router.delete('/filtroArCabine/:id')
router.delete('/mangoteAR/:id')

// sessao direcao
router.delete('/terminaisDirecao/:id')
router.delete('/barrasAxiais/:id')
router.delete('/estabilizadores/:id')
router.delete('/BuchaCaixaDirecao/:id')

// sessao suspensao
router.delete('/batedores/:id')
router.delete('/pivos/:id')
router.delete('/amortecedores/:id')
router.delete('/buchaSusp/:id')
router.delete('/coxinsAmort/:id')
router.delete('/bieletas/:id')

// sessao freios
router.delete('/pastilhaFreio/:id')
router.delete('/discosFreio/:id')
router.delete('/sapatasFreio/:id')
router.delete('/cilindros/:id')
router.delete('/tamboresFreio/:id')
router.delete('/reparosFreio/:id')
router.delete('/cabosEflexiveis/:id')
router.delete('/acessoriosFreio/:id')

// sessao ignicao
router.delete('/cabosDvela/:id')
router.delete('/velas/:id')
router.delete('/bobinasIgnicao/:id')
router.delete('/modulosIgnicao/:id')

// sessao carga
router.delete('/tensoresCorreia/:id')
router.delete('/correiaAlternador/:id')
router.delete('/correiasDentada/:id')
router.delete('/reguladorVolt/:id')
router.delete('/estatores/:id')

// sessao partida
router.delete('/bendix/:id')
router.delete('/portaEscovas/:id')
router.delete('/acessoriosMotorPart/:id')

// sessao arrefecimento
router.delete('/bombasDgua/:id')
router.delete('/reservatorioDagua/:id')
router.delete('/valvulasTermo/:id')
router.delete('/eletroventiladores/:id')
router.delete('/canosDagua/:id')
router.delete('/tubosDagua/:id')
router.delete('/resistenciaEletro/:id')
router.delete('/diversasArrefeci/:id')

// sessao injecao
router.delete('/bicosInjecao/:id')
router.delete('/bombaCombust/:id')
router.delete('/flangeBombaCombust/:id')
router.delete('/acessoriosCombust/:id')

// sessao transmissao
router.delete('/discosEmbreagem/:id')
router.delete('/reparoCambioTrabulador/:id')

// sessao rodagem
router.delete('/cubosRoda/:id')
router.delete('/pontasEixo/:id')
router.delete('/juntasHomocinetica/:id')
router.delete('/rolamentosRoda/:id')
router.delete('/rolamentoDiversos/:id')

// sessao escapes
router.delete('/bojosTras/:id')
router.delete('/canosIntermediario/:id')
router.delete('/coxinsEscap/:id')
router.delete('/acessoriosEscap/:id')








export default router;
