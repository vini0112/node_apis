
import { consulta } from "../../database/connection.js"


class oleosRepository {

    findAll(){
        const sql = "SELECT * FROM correia_dent"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM correia_dent WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO correia_dent SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE correia_dent SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM correia_dent WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

