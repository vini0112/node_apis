import { consulta } from "../../database/connection.js"


class filtrosCombustSimplesRepository {


    findById(id){
        const sql = "SELECT * FROM filtros_combust_simples WHERE idfiltros_combust_simples=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO filtros_combust_simples SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE filtros_combust_simples SET ? WHERE idfiltros_combust_simples=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM filtros_combust_simples WHERE idfiltros_combust_simples=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new filtrosCombustSimplesRepository()