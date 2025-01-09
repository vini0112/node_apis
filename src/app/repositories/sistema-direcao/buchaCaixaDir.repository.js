import { consulta } from "../../database/connection.js"


class buchaCaixaDirRepository {

    findById(id){
        const sql = "SELECT * FROM buchas_caixa_dir WHERE idbuchas_caixa_dir=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO buchas_caixa_dir SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE buchas_caixa_dir SET ? WHERE idbuchas_caixa_dir=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM buchas_caixa_dir WHERE idbuchas_caixa_dir=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new buchaCaixaDirRepository()