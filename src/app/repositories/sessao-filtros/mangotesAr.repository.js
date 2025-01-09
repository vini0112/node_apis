import { consulta } from "../../database/connection.js"


class mangotesArRepository {

    findById(id){
        const sql = "SELECT * FROM mangotes_ar WHERE idmangotes_ar=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO mangotes_ar SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE mangotes_ar SET ? WHERE idmangotes_ar=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM mangotes_ar WHERE idmangotes_ar=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new mangotesArRepository()