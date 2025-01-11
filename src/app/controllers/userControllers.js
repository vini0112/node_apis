
import userRepository from "../repositories/user.repository.js";
import connection from "../database/connection.js"
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'vaiDaCerto'

class userControllers{

    async entrando(req, res){

        const {username, email, password} = req.body

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
                res.json({message: "Erro no login"})
                return
            }

            const token = jwt.sign({ username: users.username }, SECRET_KEY, { expiresIn: '1h' });

            res.cookie('authToken', token, {
                httpOnly: true, // impede acesso ao cookie via JavaScript do lado do cliente
                secure: process.env.NODE_ENV === 'production', // Somente HTTPS em produção
                sameSite: 'strict' // Evita envio do cookie em requisições de outros sites
            }) 

            // res.json(token)
            res.json({ message: 'Login realizado com sucesso!' });
        })
    }


    protectedRoute(req, res){

        const token = req.cookies.authToken
        
        if(!token){
            res.json({message: 'No cookies'})
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            res.json({ message: 'Acesso permitido!', user: decoded });
        } catch (err) {
            res.status(401).json({ message: 'Token inválido ou expirado.' });
        }


    }



    // criando usuario
    adding(req, res){

    }

}



export default new userControllers();

// if(user_cadastrado.username == username && user_cadastrado.password == password){

//     const token = jwt.sign({ username: user_cadastrado.username }, SECRET_KEY, { expiresIn: '1h' });

//     
