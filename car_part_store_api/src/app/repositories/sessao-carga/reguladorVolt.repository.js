
import { consulta } from "../../database/connection.js"


class oleosRepository {

    findAll(){
        const sql = "SELECT * FROM reguladorvolt"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM reguladorvolt WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reguladorvolt SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reguladorvolt SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reguladorvolt WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

