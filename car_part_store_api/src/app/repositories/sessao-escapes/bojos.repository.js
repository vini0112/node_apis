import { consulta } from "../../database/connection.js"


class bojosRepository {

    findAll(){
        const sql = "SELECT * FROM bojos"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM bojos WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bojos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bojos SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bojos WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bojosRepository()