
import { consulta } from "../../database/connection.js"


class modulosIgnicaoRepository {
    findAll(){
        const sql = "SELECT * FROM modulos_ignicao"
        return consulta(sql, 'Not Found!')
    }

    findAll(){
        const sql = "SELECT * FROM modulos_ignicao"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM modulos_ignicao WHERE id=?"
        
        return consulta(sql, id, 'Product Not Found!')
        // console.log(consulta)
    }

    posting(dados){
        let sql = "INSERT INTO modulos_ignicao SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE modulos_ignicao SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM modulos_ignicao WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new modulosIgnicaoRepository();

