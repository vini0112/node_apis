
import bateriasRepository from "../repositories/baterias.repository.js"


class bateriasController {

// SHOW ALL 
    async show(req, res){
        
        const row = await bateriasRepository.findAll()
        res.json(row)
    }

    //  showById
    async showById(req, res){

        const id = req.params.id
        const row = await bateriasRepository.findById(id)
        res.json(row)
    }

    // posting 
    async postando(req, res){
        const dados = req.body
        const row = await bateriasRepository.posting(dados)
        res.json(row)
    }

    // editing 
    async update(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await bateriasRepository.editing(id, dados)
        res.json(row)
    }

    // deleting 
    async deleting(req, res){
        const id = req.params.id
        const row = await bateriasRepository.delete(id)
        res.json(row)
    }

}



export default new bateriasController();

