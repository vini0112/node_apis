import { consulta } from "../../database/connection.js"


class tubosDaguaRepository {


    findById(id){
        const sql = "SELECT * FROM tubos_dagua WHERE idtubos_dagua=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO tubos_dagua SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE tubos_dagua SET ? WHERE idtubos_dagua=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM tubos_dagua WHERE idtubos_dagua=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new tubosDaguaRepository()