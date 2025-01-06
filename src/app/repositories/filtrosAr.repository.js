import { consulta } from "../database/connection.js"


class filtrosArRepository {

    findById(id){
        const sql = "SELECT * FROM filtros_ar WHERE idfiltros_ar=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO filtros_ar SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE filtros_ar SET ? WHERE idfiltros_ar=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM filtros_ar WHERE idfiltros_ar=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new filtrosArRepository()