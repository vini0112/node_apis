import { consulta } from "../../database/connection.js"


class acessoriosEscapesRepository {

    findAll(){
        const sql = "SELECT * FROM acessorios_escapes"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM acessorios_escapes WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO acessorios_escapes SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE acessorios_escapes SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM acessorios_escapes WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new acessoriosEscapesRepository()