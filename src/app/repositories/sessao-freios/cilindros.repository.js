import { consulta } from "../../database/connection.js"


class cilindrosRepository {


    findById(id){
        const sql = "SELECT * FROM cilindros WHERE idcilindros=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO cilindros SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cilindros SET ? WHERE idcilindros=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cilindros WHERE idcilindros=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cilindrosRepository()