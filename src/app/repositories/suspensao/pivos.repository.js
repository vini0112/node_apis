import { consulta } from "../../database/connection.js"


class pivosRepository {

    findById(id){
        const sql = "SELECT * FROM pivos WHERE idpivos=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO pivos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE pivos SET ? WHERE idpivos=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM pivos WHERE idpivos=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new pivosRepository()