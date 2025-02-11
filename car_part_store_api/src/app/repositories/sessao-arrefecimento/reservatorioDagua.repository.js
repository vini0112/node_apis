import { consulta } from "../../database/connection.js"


class reservatoriosRepository {

    findAll(){
        const sql = "SELECT * FROM reservatorio_dagua"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM reservatorio_dagua WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO reservatorio_dagua SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE reservatorio_dagua SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM reservatorio_dagua WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new reservatoriosRepository()