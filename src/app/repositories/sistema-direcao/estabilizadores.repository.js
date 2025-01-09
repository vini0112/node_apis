import { consulta } from "../../database/connection.js"


class estabilizadoresRepository {

    findById(id){
        const sql = "SELECT * FROM estabilizadores WHERE idestabilizadores=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO estabilizadores SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE estabilizadores SET ? WHERE idestabilizadores=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM estabilizadores WHERE idestabilizadores=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new estabilizadoresRepository()