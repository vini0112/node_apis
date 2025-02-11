
import { consulta } from "../../database/connection.js"


class cubosRodaRepository {

    findAll(){
        const sql = "SELECT * FROM cubos_roda"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM cubos_roda WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO cubos_roda SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE cubos_roda SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM cubos_roda WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new cubosRodaRepository();

