import { consulta } from "../../database/connection.js"


class reparoCambioTrambuRepository {


    findById(id){
        const sql = "SELECT * FROM reparos_cambio_trambu WHERE idreparos_cambio_trambu=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reparos_cambio_trambu SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reparos_cambio_trambu SET ? WHERE idreparos_cambio_trambu=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reparos_cambio_trambu WHERE idreparos_cambio_trambu=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new reparoCambioTrambuRepository()