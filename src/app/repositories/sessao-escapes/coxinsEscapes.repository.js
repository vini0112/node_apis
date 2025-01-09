
import { consulta } from "../../database/connection.js"


class coxinsEscapeRepository {


    findById(id){
        const sql = "SELECT * FROM coxins_escapes WHERE idcoxins_escapes=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO coxins_escapes SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE coxins_escapes SET ? WHERE idcoxins_escapes=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM coxins_escapes WHERE idcoxins_escapes=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new coxinsEscapeRepository()