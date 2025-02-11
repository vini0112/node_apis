
import { consulta } from "../../database/connection.js"


class oleosRepository {

    findAll(){
        const sql = "SELECT * FROM estatores"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM estatores WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO estatores SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE estatores SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM estatores WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

