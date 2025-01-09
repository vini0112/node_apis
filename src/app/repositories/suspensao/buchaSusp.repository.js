import { consulta } from "../../database/connection.js"


class buchaSuspRepository {

    findById(id){
        const sql = "SELECT * FROM buchas_susp WHERE idbuchas_susp=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO buchas_susp SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE buchas_susp SET ? WHERE idbuchas_susp=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM buchas_susp WHERE idbuchas_susp=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new buchaSuspRepository()