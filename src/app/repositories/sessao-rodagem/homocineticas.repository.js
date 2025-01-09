
import { consulta } from "../../database/connection.js"


class homocineticaRepository {

    findAll(){
        const sql = "SELECT * FROM homocineticas"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM homocineticas WHERE idhomocineticas=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO homocineticas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE homocineticas SET ? WHERE idhomocineticas=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM homocineticas WHERE idhomocineticas=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new homocineticaRepository();

