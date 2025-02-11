import acessoriosEscapesRepository from "../../repositories/sessao-escapes/acessoriosEscapes.repository.js"


class acessoriosEscapesController {

    async show(req, res){
        const row = await acessoriosEscapesRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await acessoriosEscapesRepository.findById(id)
        res.json(row)
    }

    // posting 
    async postando(req, res){
        const dados = req.body

        req.files.image.mv('./uploads/'+req.files.image.name)
        const localImg = `http://localhost:3000/uploads/${req.files.image.name}`
        dados.image = localImg

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