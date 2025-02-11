import { consulta } from "../../database/connection.js"


class bateriasRepository {

    findAll(){
        const sql = "SELECT * FROM baterias"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM baterias WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO baterias SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE baterias SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM baterias WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new bateriasRepository();