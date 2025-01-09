
import { consulta } from "../../database/connection.js"


class velasRepository {

    findAll(){
        const sql = "SELECT * FROM velas"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM velas WHERE idvelas=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO velas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE velas SET ? WHERE idvelas=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM velas WHERE idvelas=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new velasRepository();

