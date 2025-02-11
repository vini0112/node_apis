
import connection, { consulta } from "../database/connection.js"
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'vaiDaCerto'

class userControllers{

    

    async entrando(req, res){

        const {username, password} = req.body

        
        if(!username || !password){
            return res.status(400).json({ error: 'Username e password são obrigatórios.' });
        }

        // conexao com DB
        const sql = "SELECT * FROM usuarios"
        connection.query(sql, [username, password], (err, result) =>{
            if(err){
                return res.status(500).json({ error: 'Erro no servidor.' });
            }

            const users = result.find(user => user.username == username && user.password == password)

            if(!users){
                res.json({Error: "Senha/Usuario incorreto!"})
                return
            }

            const token = jwt.sign({ username: users.username }, SECRET_KEY, { expiresIn: '1h' });

            res.cookie('authToken', token, {
                httpOnly: true, // impede acesso ao cookie via JavaScript do lado do cliente
                secure: process.env.NODE_ENV === 'production', // Somente HTTPS em produção
                sameSite: 'strict' // Evita envio do cookie em requisições de outros sites
            }) 

            res.json({users: "Sucesso no Login"});
            // res.json({ message: 'Login realizado com sucesso!'});
        })
    }

    async devById(req, res){
        const id = req.params.id

        const sql = "SELECT * FROM usuarios WHERE idusuarios=?"
        connection.query(sql, id, (err, result) =>{

            if(err){
                return res.status(500).json({ error: 'Erro no servidor.' });
            }

            const dados = result
            res.json({dados})
        })


    }

    async validandoEmail(req, res){
        const {email} = req.body
        
        let sql = "SELECT * FROM usuarios"

        connection.query(sql, (err, result) =>{
            if(err){
                return res.status(500).json({ error: 'Erro no servidor.' });
            }
            
            let ifExisteEmail = result.some(user => user.email == email)
            res.json({ifExisteEmail})
        })
    }

    // criando usuario
    async adding(req, res){

        const {password, email, username} = req.body
        
        if(!email || !password || !username){
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        try {
             // Salvar no banco
            connection.execute(
                'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)',
                [username, email, password]
            );
            res.status(201).json({ message: 'Usuário registrado com sucesso!' });

        } catch (error) {
                res.status(500).json({ message: 'Erro no servidor.', error });
        }

    }

}



export default new userControllers();

