
import cabosEflexiveisRepository from "../../repositories/sessao-freios/cabosEflexiveis.repository.js"

class cabosFlexiController {

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await cabosEflexiveisRepository.findById(id)
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

        
        const row = await cabosEflexiveisRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await cabosEflexiveisRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await cabosEflexiveisRepository.delete(id)
        res.json(row)
    }

}

export default new cabosFlexiController()