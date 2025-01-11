import mysql from 'mysql2'


// const connection = mysql.createConnection({
//     host: 'localhost',
//     host: process.env.DATABASE_URL,
//     port: '3306',
//     user: 'root',
//     password: 'vini1@',
//     database: 'store_parts'
// })

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
})


export const consulta = (sql, valores='', mensagemReject) =>{

    return new Promise((resolve, reject) =>{
        connection.query(sql, valores, (error, result) =>{
                    //    <>    <>
            if(error) return reject(mensagemReject)
                                        //<>
            // doing a parse in the result
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}


export default connection;
