import { consulta } from "../../database/connection.js"


class buchaSuspRepository {

    findAll(){
        const sql = "SELECT * FROM buchas_susp"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM buchas_susp WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO buchas_susp SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE buchas_susp SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM buchas_susp WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new buchaSuspRepository()