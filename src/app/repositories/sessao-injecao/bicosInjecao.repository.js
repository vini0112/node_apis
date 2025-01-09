import { consulta } from "../../database/connection.js"


class bicosInjecaoRepository {


    findById(id){
        const sql = "SELECT * FROM bicos_injecao WHERE idbicos_injecao=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bicos_injecao SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bicos_injecao SET ? WHERE idbicos_injecao=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bicos_injecao WHERE idbicos_injecao=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bicosInjecaoRepository()