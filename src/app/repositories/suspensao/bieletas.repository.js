import { consulta } from "../../database/connection.js"


class bieletasRepository {

    findById(id){
        const sql = "SELECT * FROM bieletas WHERE idbieletas=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bieletas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bieletas SET ? WHERE idbieletas=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bieletas WHERE idbieletas=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bieletasRepository()