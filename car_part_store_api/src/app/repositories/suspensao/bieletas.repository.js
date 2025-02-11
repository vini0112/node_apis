import { consulta } from "../../database/connection.js"


class bieletasRepository {

    findAll(){
        const sql = "SELECT * FROM bieletas"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM bieletas WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bieletas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bieletas SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bieletas WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bieletasRepository()