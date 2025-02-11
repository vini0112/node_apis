import { consulta } from "../../database/connection.js"


class eletroventiladorRepository {

    findAll(){
        const sql = "SELECT * FROM eletroventilador"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM eletroventilador WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO eletroventilador SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE eletroventilador SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM eletroventilador WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new eletroventiladorRepository()