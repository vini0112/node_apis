import { consulta } from "../../database/connection.js"


class reparosFreioRepository {


    findById(id){
        const sql = "SELECT * FROM reparos_freios WHERE idreparos_freios=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reparos_freios SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reparos_freios SET ? WHERE idreparos_freios=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reparos_freios WHERE idreparos_freios=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new reparosFreioRepository()