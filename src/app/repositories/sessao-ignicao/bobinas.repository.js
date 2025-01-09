
import { consulta } from "../../database/connection.js"


class bobinasRepository {

    findAll(){
        const sql = "SELECT * FROM bobinas_ignicao"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM bobinas_ignicao WHERE idbobinas_ignicao=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO bobinas_ignicao SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bobinas_ignicao SET ? WHERE idbobinas_ignicao=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bobinas_ignicao WHERE idbobinas_ignicao=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bobinasRepository();

