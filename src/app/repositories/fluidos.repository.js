import { consulta } from "../database/connection.js"


class fluidosRepository {

    findAll(){
        const sql = "SELECT * FROM fluidos"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM fluidos WHERE idFluidos=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO fluidos SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE fluidos SET ? WHERE idFluidos=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM fluidos WHERE idFluidos=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new fluidosRepository()