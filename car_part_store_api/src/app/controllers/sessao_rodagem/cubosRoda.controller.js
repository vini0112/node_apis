import cubosRodaRepository from "../../repositories/sessao-rodagem/cubosRoda.repository.js"

class sapatasController {

    async show(req, res){
        const row = await cubosRodaRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await cubosRodaRepository.findById(id)
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
        
        const row = await cubosRodaRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await cubosRodaRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await cubosRodaRepository.delete(id)
        res.json(row)
    }

}

export default new sapatasController()