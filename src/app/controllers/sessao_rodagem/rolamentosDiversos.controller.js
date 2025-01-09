
import rolamentosDiversosRepository from "../../repositories/sessao-rodagem/rolamentosDiversos.repository.js"

class rolamentosDiversosController {

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await rolamentosDiversosRepository.findById(id)
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

        
        const row = await rolamentosDiversosRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await rolamentosDiversosRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await rolamentosDiversosRepository.delete(id)
        res.json(row)
    }

}

export default new rolamentosDiversosController()