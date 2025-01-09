import { consulta } from "../../database/connection.js"


class acessoriosCombustRepository {


    findById(id){
        const sql = "SELECT * FROM acessorios_combust WHERE idacessorios_combust=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO acessorios_combust SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE acessorios_combust SET ? WHERE idacessorios_combust=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM acessorios_combust WHERE idacessorios_combust=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new acessoriosCombustRepository()