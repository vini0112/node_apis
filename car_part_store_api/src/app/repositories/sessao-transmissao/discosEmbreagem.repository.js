import { consulta } from "../../database/connection.js"


class discosEmbreagemRepository{

    findAll(){
        const sql = "SELECT * FROM discos_embreagem"
        return consulta(sql, 'Not Found!')
    }

    findById(id){
        const sql = "SELECT * FROM discos_embreagem WHERE id=?"
        return consulta(sql, id, 'Product Not Found!')
    }

    posting(dados){
        let sql = "INSERT INTO discos_embreagem SET ?"
        return consulta(sql, dados, 'Not Created!')
    }

    editing(id, dados){
        let sql = "UPDATE discos_embreagem SET ? WHERE id=?"
        return consulta(sql, [dados, id], 'Erro in Edit Product!')
    }

    delete(id){
        const sql = 'DELETE FROM discos_embreagem WHERE id=?'
        return consulta(sql, id, 'Erro in Delete Product!')
    }

}

export default new discosEmbreagemRepository()