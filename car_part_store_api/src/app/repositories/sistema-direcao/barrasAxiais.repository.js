import { consulta } from "../../database/connection.js"


class barrasAxiaisRepository {

    findAll(){
        const sql = "SELECT * FROM barras_axiais"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM barras_axiais WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO barras_axiais SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE barras_axiais SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM barras_axiais WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new barrasAxiaisRepository()