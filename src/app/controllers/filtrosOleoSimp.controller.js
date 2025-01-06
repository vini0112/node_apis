import filtroOleoSimpRepository from "../repositories/filtroOleoSimp.repository.js"

class filtrosOleoSimpController {

// SHOW ALL 
    async show(req, res){
        
        const row = await filtroOleoSimpRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await filtroOleoSimpRepository.findById(id)
        res.json(row)
    }

    // posting 
    async postando(req, res){
        const dados = req.body
        const row = await filtroOleoSimpRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await filtroOleoSimpRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await filtroOleoSimpRepository.delete(id)
        res.json(row)
    }

}

export default new filtrosOleoSimpController()