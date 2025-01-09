import { consulta } from "../../database/connection.js"


class cabosVelaRepository {


    findById(id){
        const sql = "SELECT * FROM cabos_vela WHERE idcabos_vela=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO cabos_vela SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cabos_vela SET ? WHERE idcabos_vela=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cabos_vela WHERE idcabos_vela=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cabosVelaRepository()