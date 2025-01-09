import { consulta } from "../../database/connection.js"


class coxinsAmortRepository {

    findById(id){
        const sql = "SELECT * FROM coxins_amort WHERE idcoxins_amort=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO coxins_amort SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE coxins_amort SET ? WHERE idcoxins_amort=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM coxins_amort WHERE idcoxins_amort=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new coxinsAmortRepository()