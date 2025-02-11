import { consulta } from "../../database/connection.js"


class canosDaguaRepository {

    findAll(){
        const sql = "SELECT * FROM canos_dagua"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM canos_dagua WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO canos_dagua SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE canos_dagua SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM canos_dagua WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new canosDaguaRepository()