
import { consulta } from "../../database/connection.js"


class oleosRepository {


    findById(id){
        const sql = "SELECT * FROM correia_alter WHERE idcorreia_alter=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO correia_alter SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE correia_alter SET ? WHERE idcorreia_alter=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM correia_alter WHERE idcorreia_alter=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new oleosRepository();

