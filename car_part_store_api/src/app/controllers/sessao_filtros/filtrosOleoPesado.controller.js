import filtroOleoPesadoRepository from "../../repositories/sessao-filtros/filtroOleoPesado.repository.js"

class filtrosOleoPesadoController {

// SHOW ALL 
    async show(req, res){
        
        const row = await filtroOleoPesadoRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await filtroOleoPesadoRepository.findById(id)
        res.json(row)
    }

    // posting 
    async postando(req, res){
        const dados = req.body
        const aplicacoes = req.body.aplicacoes

        req.files.image.mv('./uploads/'+req.files.image.name)
        const localImg = `http://localhost:3000/uploads/${req.files.image.name}`
        dados.image = localImg
        
        dados.aplicacoes = JSON.parse(JSON.stringify(aplicacoes))

        if(dados.aplicacoesTwo && !dados.aplicacoesThree){
            dados.aplicacoesTwo = JSON.parse(JSON.stringify(dados.aplicacoesTwo))
        }

        if(dados.aplicacoesThree){
            dados.aplicacoesTwo = JSON.parse(JSON.stringify(dados.aplicacoesTwo))
            dados.aplicacoesThree = JSON.parse(JSON.stringify(dados.aplicacoesThree))
        } 
        
        const row = await filtroOleoPesadoRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await filtroOleoPesadoRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await filtroOleoPesadoRepository.delete(id)
        res.json(row)
    }

}

export default new filtrosOleoPesadoController()