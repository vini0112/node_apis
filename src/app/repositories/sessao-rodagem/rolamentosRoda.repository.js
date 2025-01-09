
import { consulta } from "../../database/connection.js"


class rolamentoRodaRepository {


    findById(id){
        const sql = "SELECT * FROM rolamentos_roda WHERE idrolamentos_roda=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO rolamentos_roda SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE rolamentos_roda SET ? WHERE idrolamentos_roda=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM rolamentos_roda WHERE idrolamentos_roda=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new rolamentoRodaRepository();

