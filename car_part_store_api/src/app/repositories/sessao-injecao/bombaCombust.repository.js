import { consulta } from "../../database/connection.js"


class bombaCombustRepository {

    findAll(){
        const sql = "SELECT * FROM bomba_combustivel"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM bomba_combustivel WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO bomba_combustivel SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE bomba_combustivel SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM bomba_combustivel WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bombaCombustRepository()