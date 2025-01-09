import { consulta } from "../../database/connection.js"


class bombasDaguaRepository {


    findById(id){
        const sql = "SELECT * FROM bombas_dagua WHERE idbombas_dagua=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bombas_dagua SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bombas_daguas SET ? WHERE idbombas_dagua=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bombas_dagua WHERE idbombas_dagua=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bombasDaguaRepository()