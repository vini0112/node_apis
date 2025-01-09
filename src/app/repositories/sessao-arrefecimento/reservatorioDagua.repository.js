import { consulta } from "../../database/connection.js"


class reservatoriosRepository {


    findById(id){
        const sql = "SELECT * FROM reservatorio_dagua WHERE idreservatorio_dagua=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reservatorio_dagua SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reservatorio_dagua SET ? WHERE idreservatorio_dagua=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reservatorio_dagua WHERE idreservatorio_dagua=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new reservatoriosRepository()