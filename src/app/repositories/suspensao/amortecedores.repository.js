import { consulta } from "../../database/connection.js"


class amortecedoresRepository {

    findById(id){
        const sql = "SELECT * FROM amortecedores WHERE idamortecedores=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO amortecedores SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE amortecedores SET ? WHERE idamortecedores=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM amortecedores WHERE idamortecedores=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new amortecedoresRepository()