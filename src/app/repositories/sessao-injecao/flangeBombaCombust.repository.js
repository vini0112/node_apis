import { consulta } from "../../database/connection.js"


class flangeBombaRepository {


    findById(id){
        const sql = "SELECT * FROM flange_bomba_combust WHERE idflange_bomba_combust=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO flange_bomba_combust SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE flange_bomba_combust SET ? WHERE idflange_bomba_combust=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM flange_bomba_combust WHERE idflange_bomba_combust=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new flangeBombaRepository()