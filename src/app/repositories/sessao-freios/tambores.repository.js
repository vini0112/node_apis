import { consulta } from "../../database/connection.js"


class tamboresRepository {


    findById(id){
        const sql = "SELECT * FROM tambores WHERE idtambores=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO tambores SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE tambores SET ? WHERE idtambores=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM tambores WHERE idtambores=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new tamboresRepository()