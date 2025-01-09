import { consulta } from "../../database/connection.js"


class discosFreioRepository {


    findById(id){
        const sql = "SELECT * FROM discos_freio WHERE iddiscos_freio=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO discos_freio SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE discos_freio SET ? WHERE iddiscos_freio=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM discos_freio WHERE iddiscos_freio=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }
    
}

export default new discosFreioRepository()