import { consulta } from "../database/connection.js"


class userRepository {

    ifExist(username, password){
        

    }

    findById(id){
        const sql = "SELECT * FROM usuarios WHERE idusuarios=?"
        return consulta(sql, id, 'User Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO suspensao SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE suspensao SET ? WHERE idsuspensao=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM suspensao WHERE idsuspensao=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new userRepository()