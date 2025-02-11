import { consulta } from "../../database/connection.js"


class cabosEflexiRepository {

    findAll(){
        const sql = "SELECT * FROM cabos_e_flexiveis"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM cabos_e_flexiveis WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO cabos_e_flexiveis SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cabos_e_flexiveis SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cabos_e_flexiveis WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cabosEflexiRepository()