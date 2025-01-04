
import Router from "express";
import productControllers from "../app/controllers/productControllers.js";
import { storage } from "../multerConfig.js";
import multer from "multer";
const router = Router()

// Configuração do Multer
const upload = multer({storage: storage,
    limits: {fileSize: 1500000},
})



// GET
router.get('/', productControllers.show)


// to upTimeRobot
router.get('/ping', (req, res) => {
    res.status(200).send('OK');
});





// GET BY IDS
router.get('/oleos/:id', productControllers.showById)
router.get('/baterias/:id', productControllers.showById)
router.get('/fluidos/:id', productControllers.showById)

// sessao filtros
router.get('/filtroOleoSimples/:id', productControllers.showById)
router.get('/filtroOleoPesado/:id', productControllers.showById)
router.get('/filtroCombustSimples/:id', productControllers.showById)
router.get('/filtroCombustPesado/:id', productControllers.showById)
router.get('/filtroArMotor/:id', productControllers.showById)
router.get('/filtroArCabine/:id', productControllers.showById)
router.get('/mangoteAR/:id', productControllers.showById)

// sessao direcao
router.get('/terminaisDirecao/:id', productControllers.showById)
router.get('/barrasAxiais/:id', productControllers.showById)
router.get('/estabilizadores/:id', productControllers.showById)
router.get('/BuchaCaixaDirecao/:id', productControllers.showById)

// sessao suspensao
router.get('/batedores/:id', productControllers.showById)
router.get('/pivos/:id', productControllers.showById)
router.get('/amortecedores/:id', productControllers.showById)
router.get('/buchaSusp/:id', productControllers.showById)
router.get('/coxinsAmort/:id', productControllers.showById)
router.get('/bieletas/:id', productControllers.showById)

// sessao freios
router.get('/pastilhaFreio/:id', productControllers.showById)
router.get('/discosFreio/:id', productControllers.showById)
router.get('/sapatasFreio/:id', productControllers.showById)
router.get('/cilindros/:id', productControllers.showById)
router.get('/tamboresFreio/:id', productControllers.showById)
router.get('/reparosFreio/:id', productControllers.showById)
router.get('/cabosEflexiveis/:id', productControllers.showById)
router.get('/acessoriosFreio/:id', productControllers.showById)

// sessao ignicao
router.get('/cabosDvela/:id', productControllers.showById)
router.get('/velas/:id', productControllers.showById)
router.get('/bobinasIgnicao/:id', productControllers.showById)
router.get('/modulosIgnicao/:id', productControllers.showById)

// sessao carga
router.get('/tensoresCorreia/:id', productControllers.showById)
router.get('/correiaAlternador/:id', productControllers.showById)
router.get('/correiasDentada/:id', productControllers.showById)
router.get('/reguladorVolt/:id', productControllers.showById)
router.get('/estatores/:id', productControllers.showById)

// sessao partida
router.get('/bendix/:id', productControllers.showById)
router.get('/portaEscovas/:id', productControllers.showById)
router.get('/acessoriosMotorPart/:id', productControllers.showById)

// sessao arrefecimento
router.get('/bombasDgua/:id', productControllers.showById)
router.get('/reservatorioDagua/:id', productControllers.showById)
router.get('/valvulasTermo/:id', productControllers.showById)
router.get('/eletroventiladores/:id', productControllers.showById)
router.get('/canosDagua/:id', productControllers.showById)
router.get('/tubosDagua/:id', productControllers.showById)
router.get('/resistenciaEletro/:id', productControllers.showById)
router.get('/diversasArrefeci/:id', productControllers.showById)

// sessao injecao
router.get('/bicosInjecao/:id', productControllers.showById)
router.get('/bombaCombust/:id', productControllers.showById)
router.get('/flangeBombaCombust/:id', productControllers.showById)
router.get('/acessoriosCombust/:id', productControllers.showById)

// sessao transmissao
router.get('/discosEmbreagem/:id', productControllers.showById)
router.get('/reparoCambioTrabulador/:id', productControllers.showById)

// sessao rodagem
router.get('/cubosRoda/:id', productControllers.showById)
router.get('/pontasEixo/:id', productControllers.showById)
router.get('/juntasHomocinetica/:id', productControllers.showById)
router.get('/rolamentosRoda/:id', productControllers.showById)
router.get('/rolamentoDiversos/:id', productControllers.showById)

// sessao escapes
router.get('/bojosTras/:id', productControllers.showById)
router.get('/canosIntermediario/:id', productControllers.showById)
router.get('/coxinsEscap/:id', productControllers.showById)
router.get('/acessoriosEscap/:id', productControllers.showById)






// POST 
router.post('/oleos' , upload.single('image'), productControllers.postOleo)
router.post('/baterias', productControllers.postBateriaYfluido)
router.post('/fluidos' ,productControllers.postBateriaYfluido)

// sessao filtros
router.post('/filtroOleoSimples', productControllers.postEstruturaAplicacoes)
router.post('/filtroOleoPesado', productControllers.postEstruturaAplicacoes)
router.post('/filtroCombustSimples', productControllers.postEstruturaAplicacoes)
router.post('/filtroCombustPesado', productControllers.postEstruturaAplicacoes)
router.post('/filtroArMotor', productControllers.postEstruturaAplicacoes)
router.post('/filtroArCabine', productControllers.postEstruturaAplicacoes)
router.post('/mangoteAR', productControllers.postEstruturaAplicacoes)

// sessao direcao
router.post('/terminaisDirecao', productControllers.postEstruturaAplicacoes)
router.post('/barrasAxiais', productControllers.postBarrasAxiais)
router.post('/estabilizadores', productControllers.postEstruturaAplicacoes)
router.post('/BuchaCaixaDirecao', productControllers.postEstruturaAplicacoes)

// sessao suspensao
router.post('/batedores', productControllers.postEstruturaAplicacoes)
router.post('/pivos', productControllers.postEstruturaAplicacoes)
router.post('/amortecedores', productControllers.postEstruturaAplicacoes)
router.post('/buchaSusp', productControllers.postEstruturaAplicacoes)
router.post('/coxinsAmort', productControllers.postEstruturaAplicacoes)
router.post('/bieletas', productControllers.postEstruturaAplicacoes)

// sessao freios
router.post('/pastilhaFreio', productControllers.postEstruturaAplicacoes)
router.post('/discosFreio', productControllers.postEstruturaAplicacoes)
router.post('/sapatasFreio', productControllers.postEstruturaAplicacoes)
router.post('/cilindros', productControllers.postEstruturaAplicacoes)
router.post('/tamboresFreio', productControllers.postEstruturaAplicacoes)
router.post('/reparosFreio', productControllers.postEstruturaAplicacoes)
router.post('/cabosEflexiveis', productControllers.postEstruturaAplicacoes)
router.post('/acessoriosFreio', productControllers.postEstruturaAplicacoes)

// sessao ignicao
router.post('/cabosDvela', productControllers.postEstruturaAplicacoes)
router.post('/velas', productControllers.postEstruturaAplicacoes)
router.post('/bobinasIgnicao', productControllers.postEstruturaAplicacoes)
router.post('/modulosIgnicao', productControllers.postEstruturaAplicacoes)

// sessao carga
router.post('/tensoresCorreia', productControllers.postEstruturaAplicacoes)
router.post('/correiaAlternador', productControllers.postEstruturaAplicacoes)
router.post('/correiasDentada', productControllers.postEstruturaAplicacoes)
router.post('/reguladorVolt', productControllers.postEstruturaAplicacoes)
router.post('/estatores', productControllers.postEstruturaAplicacoes)

// sessao partida
router.post('/bendix', productControllers.postEstruturaAplicacoes)
router.post('/portaEscovas', productControllers.postEstruturaAplicacoes)
router.post('/acessoriosMotorPart', productControllers.postEstruturaAplicacoes)

// sessao arrefecimento
router.post('/bombasDgua', productControllers.postEstruturaAplicacoes)
router.post('/reservatorioDagua', productControllers.postEstruturaAplicacoes)
router.post('/valvulasTermo', productControllers.postEstruturaAplicacoes)
router.post('/eletroventiladores', productControllers.postEstruturaAplicacoes)
router.post('/canosDagua', productControllers.postEstruturaAplicacoes)
router.post('/tubosDagua', productControllers.postEstruturaAplicacoes)
router.post('/resistenciaEletro', productControllers.postEstruturaAplicacoes)
router.post('/diversasArrefeci', productControllers.postEstruturaAplicacoes)

// sessao injecao
router.post('/bicosInjecao', productControllers.postEstruturaAplicacoes)
router.post('/bombaCombust', productControllers.postEstruturaAplicacoes)
router.post('/flangeBombaCombust', productControllers.postEstruturaAplicacoes)
router.post('/acessoriosCombust', productControllers.postEstruturaAplicacoes)

// sessao transmissao
router.post('/discosEmbreagem', productControllers.postEstruturaAplicacoes)
router.post('/reparoCambioTrabulador', productControllers.postEstruturaAplicacoes)

// sessao rodagem
router.post('/cubosRoda', productControllers.postEstruturaAplicacoes)
router.post('/pontasEixo', productControllers.postEstruturaAplicacoes)
router.post('/juntasHomocinetica', productControllers.postEstruturaAplicacoes)
router.post('/rolamentosRoda', productControllers.postEstruturaAplicacoes)
router.post('/rolamentoDiversos', productControllers.postEstruturaAplicacoes)

// sessao escapes
router.post('/bojosTras', productControllers.postEstruturaAplicacoes)
router.post('/canosIntermediario', productControllers.postEstruturaAplicacoes)
router.post('/coxinsEscap', productControllers.postEstruturaAplicacoes)
router.post('/acessoriosEscap', productControllers.postEstruturaAplicacoes)






// UPDATE
router.put('/oleos/:id', productControllers.updateOleo)
router.put('/baterias/:id', productControllers.updateBateriaYfluido)
router.put('/fluidos/:id', productControllers.updateBateriaYfluido)

// sessao filtros
router.put('/filtroOleoSimples/:id', productControllers.updateEstruturaAplicacoes)
router.put('/filtroOleoPesado/:id', productControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustSimples/:id', productControllers.updateEstruturaAplicacoes)
router.put('/filtroCombustPesado/:id', productControllers.updateEstruturaAplicacoes)
router.put('/filtroArMotor/:id', productControllers.updateEstruturaAplicacoes)
router.put('/filtroArCabine/:id', productControllers.updateEstruturaAplicacoes)
router.put('/mangoteAR/:id', productControllers.updateEstruturaAplicacoes)

// sessao de direcao
router.put('/terminaisDirecao/:id', productControllers.updateEstruturaAplicacoes)
router.put('/barrasAxiais/:id', productControllers.updateEstruturaAplicacoes)
router.put('/estabilizadores/:id', productControllers.updateEstruturaAplicacoes)
router.put('/BuchaCaixaDirecao/:id', productControllers.updateEstruturaAplicacoes)

// sessao suspensao 
router.put('/batedores/:id', productControllers.updateEstruturaAplicacoes)
router.put('/pivos/:id', productControllers.updateEstruturaAplicacoes)
router.put('/amortecedores/:id', productControllers.updateEstruturaAplicacoes)
router.put('/buchaSusp/:id', productControllers.updateEstruturaAplicacoes)
router.put('/coxinsAmort/:id', productControllers.updateEstruturaAplicacoes)
router.put('/bieletas/:id', productControllers.updateEstruturaAplicacoes)

// sessao freios
router.put('/pastilhaFreio/:id', productControllers.updateEstruturaAplicacoes)
router.put('/discosFreio/:id', productControllers.updateEstruturaAplicacoes)
router.put('/sapatasFreio/:id', productControllers.updateEstruturaAplicacoes)
router.put('/cilindros/:id', productControllers.updateEstruturaAplicacoes)
router.put('/tamboresFreio/:id', productControllers.updateEstruturaAplicacoes)
router.put('/reparosFreio/:id', productControllers.updateEstruturaAplicacoes)
router.put('/cabosEflexiveis/:id', productControllers.updateEstruturaAplicacoes)
router.put('/acessoriosFreio/:id', productControllers.updateEstruturaAplicacoes)

// sessao ignicao
router.put('/cabosDvela/:id', productControllers.updateEstruturaAplicacoes)
router.put('/velas/:id', productControllers.updateEstruturaAplicacoes)
router.put('/bobinasIgnicao/:id', productControllers.updateEstruturaAplicacoes)
router.put('/modulosIgnicao/:id', productControllers.updateEstruturaAplicacoes)

// sessao carga
router.put('/tensoresCorreia/:id', productControllers.updateEstruturaAplicacoes)
router.put('/correiaAlternador/:id', productControllers.updateEstruturaAplicacoes)
router.put('/correiasDentada/:id', productControllers.updateEstruturaAplicacoes)
router.put('/reguladorVolt/:id', productControllers.updateEstruturaAplicacoes)
router.put('/estatores/:id', productControllers.updateEstruturaAplicacoes)

// sessao partida
router.put('/bendix/:id', productControllers.updateEstruturaAplicacoes)
router.put('/portaEscovas/:id', productControllers.updateEstruturaAplicacoes)
router.put('/acessoriosMotorPart/:id', productControllers.updateEstruturaAplicacoes)

// sessao arrefecimento
router.put('/bombasDgua/:id', productControllers.updateEstruturaAplicacoes)
router.put('/reservatorioDagua/:id', productControllers.updateEstruturaAplicacoes)
router.put('/valvulasTermo/:id', productControllers.updateEstruturaAplicacoes)
router.put('/eletroventiladores/:id', productControllers.updateEstruturaAplicacoes)
router.put('/canosDagua/:id', productControllers.updateEstruturaAplicacoes)
router.put('/tubosDagua/:id', productControllers.updateEstruturaAplicacoes)
router.put('/resistenciaEletro/:id', productControllers.updateEstruturaAplicacoes)
router.put('/diversasArrefeci/:id', productControllers.updateEstruturaAplicacoes)

// sessao injecao
router.put('/bicosInjecao/:id', productControllers.updateEstruturaAplicacoes)
router.put('/bombaCombust/:id', productControllers.updateEstruturaAplicacoes)
router.put('/flangeBombaCombust/:id', productControllers.updateEstruturaAplicacoes)
router.put('/acessoriosCombust/:id', productControllers.updateEstruturaAplicacoes)

// sessao transmissao
router.put('/discosEmbreagem/:id', productControllers.updateEstruturaAplicacoes)
router.put('/reparoCambioTrabulador/:id', productControllers.updateEstruturaAplicacoes)

// sessao rodagem
router.put('/cubosRoda/:id', productControllers.updateEstruturaAplicacoes)
router.put('/pontasEixo/:id', productControllers.updateEstruturaAplicacoes)
router.put('/juntasHomocinetica/:id', productControllers.updateEstruturaAplicacoes)
router.put('/rolamentosRoda/:id', productControllers.updateEstruturaAplicacoes)
router.put('/rolamentoDiversos/:id', productControllers.updateEstruturaAplicacoes)

// sessao escapes
router.put('/bojosTras/:id', productControllers.updateEstruturaAplicacoes)
router.put('/canosIntermediario/:id', productControllers.updateEstruturaAplicacoes)
router.put('/coxinsEscap/:id', productControllers.updateEstruturaAplicacoes)
router.put('/acessoriosEscap/:id', productControllers.updateEstruturaAplicacoes)






// DELETE
router.delete('/oleos/:id', productControllers.deleting)
router.delete('/baterias/:id', productControllers.deleting)
router.delete('/fluidos/:id', productControllers.deleting)

// sessao filtros
router.delete('/filtroOleoSimples/:id', productControllers.deleting)
router.delete('/filtroOleoPesado/:id', productControllers.deleting)
router.delete('/filtroCombustSimples/:id', productControllers.deleting)
router.delete('/filtroCombustPesado/:id', productControllers.deleting)
router.delete('/filtroArMotor/:id', productControllers.deleting)
router.delete('/filtroArCabine/:id', productControllers.deleting)
router.delete('/mangoteAR/:id', productControllers.deleting)

// sessao direcao
router.delete('/terminaisDirecao/:id', productControllers.deleting)
router.delete('/barrasAxiais/:id', productControllers.deleting)
router.delete('/estabilizadores/:id', productControllers.deleting)
router.delete('/BuchaCaixaDirecao/:id', productControllers.deleting)

// sessao suspensao
router.delete('/batedores/:id', productControllers.deleting)
router.delete('/pivos/:id', productControllers.deleting)
router.delete('/amortecedores/:id', productControllers.deleting)
router.delete('/buchaSusp/:id', productControllers.deleting)
router.delete('/coxinsAmort/:id', productControllers.deleting)
router.delete('/bieletas/:id', productControllers.deleting)

// sessao freios
router.delete('/pastilhaFreio/:id', productControllers.deleting)
router.delete('/discosFreio/:id', productControllers.deleting)
router.delete('/sapatasFreio/:id', productControllers.deleting)
router.delete('/cilindros/:id', productControllers.deleting)
router.delete('/tamboresFreio/:id', productControllers.deleting)
router.delete('/reparosFreio/:id', productControllers.deleting)
router.delete('/cabosEflexiveis/:id', productControllers.deleting)
router.delete('/acessoriosFreio/:id', productControllers.deleting)

// sessao ignicao
router.delete('/cabosDvela/:id', productControllers.deleting)
router.delete('/velas/:id', productControllers.deleting)
router.delete('/bobinasIgnicao/:id', productControllers.deleting)
router.delete('/modulosIgnicao/:id', productControllers.deleting)

// sessao carga
router.delete('/tensoresCorreia/:id', productControllers.deleting)
router.delete('/correiaAlternador/:id', productControllers.deleting)
router.delete('/correiasDentada/:id', productControllers.deleting)
router.delete('/reguladorVolt/:id', productControllers.deleting)
router.delete('/estatores/:id', productControllers.deleting)

// sessao partida
router.delete('/bendix/:id', productControllers.deleting)
router.delete('/portaEscovas/:id', productControllers.deleting)
router.delete('/acessoriosMotorPart/:id', productControllers.deleting)

// sessao arrefecimento
router.delete('/bombasDgua/:id', productControllers.deleting)
router.delete('/reservatorioDagua/:id', productControllers.deleting)
router.delete('/valvulasTermo/:id', productControllers.deleting)
router.delete('/eletroventiladores/:id', productControllers.deleting)
router.delete('/canosDagua/:id', productControllers.deleting)
router.delete('/tubosDagua/:id', productControllers.deleting)
router.delete('/resistenciaEletro/:id', productControllers.deleting)
router.delete('/diversasArrefeci/:id', productControllers.deleting)

// sessao injecao
router.delete('/bicosInjecao/:id', productControllers.deleting)
router.delete('/bombaCombust/:id', productControllers.deleting)
router.delete('/flangeBombaCombust/:id', productControllers.deleting)
router.delete('/acessoriosCombust/:id', productControllers.deleting)

// sessao transmissao
router.delete('/discosEmbreagem/:id', productControllers.deleting)
router.delete('/reparoCambioTrabulador/:id', productControllers.deleting)

// sessao rodagem
router.delete('/cubosRoda/:id', productControllers.deleting)
router.delete('/pontasEixo/:id', productControllers.deleting)
router.delete('/juntasHomocinetica/:id', productControllers.deleting)
router.delete('/rolamentosRoda/:id', productControllers.deleting)
router.delete('/rolamentoDiversos/:id', productControllers.deleting)

// sessao escapes
router.delete('/bojosTras/:id', productControllers.deleting)
router.delete('/canosIntermediario/:id', productControllers.deleting)
router.delete('/coxinsEscap/:id', productControllers.deleting)
router.delete('/acessoriosEscap/:id', productControllers.deleting)








export default router;
