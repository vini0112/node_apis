import { consulta } from "../../database/connection.js"


class mangotesArRepository {

    findAll(){
        const sql = "SELECT * FROM mangotes_ar"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM mangotes_ar WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO mangotes_ar SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE mangotes_ar SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM mangotes_ar WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new mangotesArRepository()