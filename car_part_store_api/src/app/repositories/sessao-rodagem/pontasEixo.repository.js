
import { consulta } from "../../database/connection.js"


class pontaEixoRepository {

    findAll(){
        const sql = "SELECT * FROM pontas_eixo"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM pontas_eixo WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO pontas_eixo SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE pontas_eixo SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM pontas_eixo WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new pontaEixoRepository();

