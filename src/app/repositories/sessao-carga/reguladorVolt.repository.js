
import { consulta } from "../../database/connection.js"


class oleosRepository {


    findById(id){
        const sql = "SELECT * FROM reguladorvolt WHERE idreguladorvolt=?"
        
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reguladorvolt SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reguladorvolt SET ? WHERE idreguladorvolt=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reguladorvolt WHERE idreguladorvolt=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

