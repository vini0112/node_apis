
import oleosRepository from "../../repositories/sessao-oleos/oleos.repository.js"



class oleosController{

    // SHOW ALL OLEOS
    async show(req, res){
        
        const row = await oleosRepository.findAll()
        res.json(row)
    }

    // oleos showById
    async showById(req, res){

        const id = req.params.id
        const row = await oleosRepository.findById(id)
        res.json(row)
    }

    // posting oleos
    async postOleos(req, res){
        const dados = req.body

        req.files.image.mv('./uploads/'+req.files.image.name)
        const localImg = `http://localhost:3000/uploads/${req.files.image.name}`
        dados.image = localImg
        
        const row = await oleosRepository.posting(dados)
        res.json(row)
    }

    // editing oleos
    async updateOleos(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await oleosRepository.editing(id, dados)
        res.json(row)
    }

    // deleting oleos
    async deletingOleos(req, res){
        const id = req.params.id
        const row = await oleosRepository.delete(id)
        res.json(row)
    }


}


export default new oleosController();
