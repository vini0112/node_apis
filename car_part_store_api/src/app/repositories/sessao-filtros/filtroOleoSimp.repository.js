import { consulta } from "../../database/connection.js"


class filtrosOleoSimpRepository {
    

    findAll(){
        const sql = "SELECT * FROM filtros_oleo_simples"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM filtros_oleo_simples WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO filtros_oleo_simples SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE filtros_oleo_simples SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM filtros_oleo_simples WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new filtrosOleoSimpRepository()