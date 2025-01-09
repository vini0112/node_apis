import { consulta } from "../../database/connection.js"


class sapatasRepository {


    findById(id){
        const sql = "SELECT * FROM sapatas WHERE idsapatas=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO sapatas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE sapatas SET ? WHERE idsapatas=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM sapatas WHERE idsapatas=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new sapatasRepository()