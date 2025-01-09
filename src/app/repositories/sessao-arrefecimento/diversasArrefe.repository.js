import { consulta } from "../../database/connection.js"


class diversasArrefRepository {


    findById(id){
        const sql = "SELECT * FROM diversas_arrefeci WHERE iddiversas_arrefeci=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO diversas_arrefeci SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE diversas_arrefeci SET ? WHERE iddiversas_arrefeci=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM diversas_arrefeci WHERE iddiversas_arrefeci=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new diversasArrefRepository()