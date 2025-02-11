import { consulta } from "../../database/connection.js"


class intermediariosRepository {

    findAll(){
        const sql = "SELECT * FROM intermediarios"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM intermediarios WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO intermediarios SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE intermediarios SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM intermediarios WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new intermediariosRepository()