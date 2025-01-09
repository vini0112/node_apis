import { consulta } from "../../database/connection.js"


class valvulasTermoRepository {

    findById(id){
        const sql = "SELECT * FROM valvulas_termo WHERE idvalvulas_termo=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO valvulas_termo SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE valvulas_termo SET ? WHERE idvalvulas_termo=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM valvulas_termo WHERE idvalvulas_termo=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new valvulasTermoRepository()