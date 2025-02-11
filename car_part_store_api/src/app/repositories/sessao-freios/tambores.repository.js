import { consulta } from "../../database/connection.js"


class tamboresRepository {

    findAll(){
        const sql = "SELECT * FROM tambores"
        return consulta(sql, 'Not Found!')
    }


    findById(id){
        const sql = "SELECT * FROM tambores WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO tambores SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE tambores SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM tambores WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new tamboresRepository()