
import { readFileSync, writeFileSync } from "fs"


// ler
const readFile = () =>{
    const content = readFileSync('./allpeaces.json', "utf-8")
    return(JSON.parse(content))
}

// salva
const writeFile = (content) =>{
    const updateFile = JSON.stringify(content)
    writeFileSync('./allpeaces.json', updateFile, 'utf-8')
}



class userController {

    // criando usuario
    adding(req, res){

        const {username, email, password} = req.body

        const currentContent = readFile()

        currentContent.users.push({username, email, password})

        writeFile(currentContent)
        res.send("Criado com sucesso!")
    }
}



export default new userController();


