import { consulta } from "../../database/connection.js"


class cilindrosRepository {

    findAll(){
        const sql = "SELECT * FROM cilindros"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM cilindros WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO cilindros SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cilindros SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cilindros WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cilindrosRepository()