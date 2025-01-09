import { consulta } from "../../database/connection.js"


class bendixRepository {


    findById(id){
        const sql = "SELECT * FROM bendix WHERE idbendix=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bendix SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bendix SET ? WHERE idbendix=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bendix WHERE idbendix=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bendixRepository()