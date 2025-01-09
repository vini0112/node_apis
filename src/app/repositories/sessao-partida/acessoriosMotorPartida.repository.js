import { consulta } from "../../database/connection.js"


class acessoriosPartidaRepository {


    findById(id){
        const sql = "SELECT * FROM acessorios_motor_partida WHERE idacessorios_motor_partida=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO acessorios_motor_partida SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE acessorios_motor_partida SET ? WHERE idacessorios_motor_partida=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM acessorios_motor_partida WHERE idacessorios_motor_partida=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new acessoriosPartidaRepository()