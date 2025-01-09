import acessoriosEscapesRepository from "../../repositories/sessao-escapes/acessoriosEscapes.repository.js"


class acessoriosEscapesController {


    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await acessoriosEscapesRepository.findById(id)
        res.json(row)
    }

    // posting 
    async postando(req, res){
        const dados = req.body

        const row = await acessoriosEscapesRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await acessoriosEscapesRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await acessoriosEscapesRepository.delete(id)
        res.json(row)
    }

}

export default new acessoriosEscapesController()