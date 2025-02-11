import { consulta } from "../../database/connection.js"


class portaEscovasRepository {

    findAll(){
        const sql = "SELECT * FROM porta_escovas"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM porta_escovas WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO porta_escovas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE porta_escovas SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM porta_escovas WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new portaEscovasRepository()