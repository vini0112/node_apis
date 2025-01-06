
import { consulta } from "../database/connection.js"


class oleosRepository {

    findAll(){
        const sql = "SELECT * FROM oleos"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM oleos WHERE idOleos=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO oleos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE oleos SET ? WHERE idOleos=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM oleos WHERE idOleos=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

