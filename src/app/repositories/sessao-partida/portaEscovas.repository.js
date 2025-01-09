import { consulta } from "../../database/connection.js"


class portaEscovasRepository {


    findById(id){
        const sql = "SELECT * FROM porta_escovas WHERE idporta_escovas=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO porta_escovas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE porta_escovas SET ? WHERE idporta_escovas=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM porta_escovas WHERE idporta_escovas=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new portaEscovasRepository()