import { consulta } from "../../database/connection.js"


class resistenciaEletroRepository {

    findAll(){
        const sql = "SELECT * FROM resistencia_eletro"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM resistencia_eletro WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO resistencia_eletro SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE resistencia_eletro SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM resistencia_eletro WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new resistenciaEletroRepository()