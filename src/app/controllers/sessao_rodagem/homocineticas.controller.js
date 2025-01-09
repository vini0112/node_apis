import homocineticasRepository from "../../repositories/sessao-rodagem/homocineticas.repository.js"

class homocineticasController {

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await homocineticasRepository.findById(id)
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

        
        const row = await homocineticasRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await homocineticasRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await homocineticasRepository.delete(id)
        res.json(row)
    }

}

export default new homocineticasController()