
import bieletasRepository from "../../repositories/suspensao/bieletas.repository.js"

class bieletasController{

    async show(req, res){
        const row = await bieletasRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){
        const id = req.params.id
        const row = await bieletasRepository.findById(id)
        res.json(row)
    }

    // posting
    async postando(req, res){
        const dados = req.body
        const aplicacoes = req.body.aplicacoes
        
        dados.aplicacoes = JSON.stringify(aplicacoes)

        if(dados.aplicacoesTwo && !dados.aplicacoesThree){
            dados.aplicacoesTwo = JSON.stringify(dados.aplicacoesTwo)
        }

        if(dados.aplicacoesThree){
            dados.aplicacoesTwo = JSON.stringify(dados.aplicacoesTwo)
            dados.aplicacoesThree = JSON.stringify(dados.aplicacoesThree)
        } 

        req.files.image.mv('./uploads/'+req.files.image.name)
        const localImg = `http://localhost:3000/uploads/${req.files.image.name}`
        dados.image = localImg
        
        const row = await bieletasRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id
        const row = await bieletasRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await bieletasRepository.delete(id)
        res.json(row)
    }

}

export default new bieletasController()