
import { consulta } from "../../database/connection.js"


class rolamentosDiversosRepository {

    findAll(){
        const sql = "SELECT * FROM rolamentos_diversos"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM rolamentos_diversos WHERE idrolamentos_diversos=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO rolamentos_diversos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE rolamentos_diversos SET ? WHERE idrolamentos_diversos=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM rolamentos_diversos WHERE idrolamentos_diversos=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new rolamentosDiversosRepository();

