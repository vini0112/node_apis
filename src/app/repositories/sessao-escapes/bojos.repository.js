import { consulta } from "../../database/connection.js"


class bojosRepository {


    findById(id){
        const sql = "SELECT * FROM bojos WHERE idbojos=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bojos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bojos SET ? WHERE idbojos=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bojos WHERE idbojos=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bojosRepository()