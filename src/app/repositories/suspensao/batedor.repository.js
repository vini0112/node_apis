import { consulta } from "../../database/connection.js"


class batedorRepository {

    findById(id){
        const sql = "SELECT * FROM suspensao WHERE idsuspensao=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO suspensao SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE suspensao SET ? WHERE idsuspensao=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM suspensao WHERE idsuspensao=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new batedorRepository()