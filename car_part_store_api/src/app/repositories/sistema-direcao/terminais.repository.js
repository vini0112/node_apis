import { consulta } from "../../database/connection.js"


class terminaisRepository {
    findAll(){
        const sql = "SELECT * FROM terminais"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM terminais WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO terminais SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE terminais SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM terminais WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new terminaisRepository()