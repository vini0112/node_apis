import { consulta } from "../../database/connection.js"


class filtrosCombustPesadoRepository {


    findById(id){
        const sql = "SELECT * FROM filtros_combust_pesado WHERE idfiltros_combust_pesado=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO filtros_combust_pesado SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE filtros_combust_pesado SET ? WHERE idfiltros_combust_pesado=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM filtros_combust_pesado WHERE idfiltros_combust_pesado=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new filtrosCombustPesadoRepository()