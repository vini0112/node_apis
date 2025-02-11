import { consulta } from "../../database/connection.js"


class pastilhasRepository {


    findAll(){
        const sql = "SELECT * FROM pastilhas"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM pastilhas WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO pastilhas SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE pastilhas SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM pastilhas WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new pastilhasRepository()