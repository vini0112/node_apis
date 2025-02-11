import { consulta } from "../../database/connection.js"


class cabosVelaRepository {

    findAll(){
        const sql = "SELECT * FROM cabos_vela"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM cabos_vela WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO cabos_vela SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cabos_vela SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cabos_vela WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cabosVelaRepository()