
import oleosRepository from "../../repositories/sessao-oleos/oleos.repository.js"

class oleosController{

    // SHOW ALL OLEOS
    async show(req, res){
        
        const row = await oleosRepository.findAll()
        res.json(row)
    }

    // oleos showById
    async showById(req, res){

        const id = req.params.id
        const row = await oleosRepository.findById(id)
        res.json(row)
    }

    // posting oleos
    async postOleos(req, res){
        const dados = req.body
        const row = await oleosRepository.posting(dados)
        res.json(row)
    }

    // editing oleos
    async updateOleos(req, res){
        const dados = req.body
        const id = req.params.id

        const row = await oleosRepository.editing(id, dados)
        res.json(row)
    }

    // deleting oleos
    async deletingOleos(req, res){
        const id = req.params.id
        const row = await oleosRepository.delete(id)
        res.json(row)
    }



    // not in use this ones 


    // POSTS
    postOleo(req, res){

        // receiving
        const {nome, marca, info} = req.body
        const price = Number(req.body.price)
        const qtd = Number(req.body.qtd)
        const file = req.file
        
        if(!file){
            return res.status(400).json({ error: 'Nenhum arquivo enviado' });
        }

        // url publica da imagem!
        const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;
        

        // lendo
        const currentContent = readFile()
        

        // lendo o array atual e extraindo
        const extraindoArrays = Object.values(currentContent)
        const achatandoArrays = extraindoArrays.flat()
        
        
        
        // definindo ID
        const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1


        // salvando
        currentContent.oleos.push({id, nome, marca, image, info, price, qtd})
        
        writeFile(currentContent)
        res.status(201).send("Created")
        
    }

    postBateriaYfluido(req, res){

        const {nome, marca} = req.body
        const price = Number(req.body.price)
        const qtd = Number(req.body.qtd)
        const file = req.file
        
        if(!file){
            return res.status(400).json({ error: 'Nenhum arquivo enviado' });
        }

        // url publica da imagem!
        const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

        const path = req.path.replace(/\/\d+$/, '')
        const cleanPath = path.split('/').filter(segment => isNaN(segment)).join('/')


        const currentContent = readFile()
        
        const extraindoArrays = Object.values(currentContent)
        const achatandoArrays = extraindoArrays.flat()
    
        // definindo ID
        const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
    
        // salvando
        currentContent[cleanPath].push({id, nome, image, marca, price, qtd})
        
        writeFile(currentContent)
        res.send('criado com sucesso')
        
    }

    postEstruturaAplicacoes(req, res){

        const {aplicacoes} = req.body
        const {aplicacoesTwo} = req.body
        const {aplicacoesThree} = req.body
        const path = req.path.replace(/\/\d+$/, '')
        const cleanPath = path.split('/').filter(segment => isNaN(segment)).join('/')

        // console.log(cleanPath)
        if(aplicacoes && !aplicacoesTwo){
            const {nome, marca, info, linha, linhaCode, linkApli, aplicacoes} = req.body

            const {price} = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;


            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent[cleanPath].push({id, nome, image, marca, info, linha, linhaCode, code, linkApli, price, qtd, aplicacoes})
            writeFile(currentContent)
            res.send(currentContent)
        }

        else if(aplicacoesTwo && !aplicacoesThree){

            const {nome, marca, info, linha, linhaCode, secundLineCode, linkApli, aplicacoes, aplicacoesTwo} = req.body

            const price = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent[cleanPath].push({id, nome, image, marca, info, linha, linhaCode, secundLineCode, code, linkApli, price, qtd, aplicacoes, aplicacoesTwo})
            writeFile(currentContent)
            res.send(currentContent)

        }
        
        else if(aplicacoesThree){
            const {nome, marca, info, linha, linhaCode, secundLineCode, thirdLineCode, linkApli, aplicacoes, aplicacoesTwo, aplicacoesThree} = req.body

            const price = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent[cleanPath].push({id, nome, image, marca, info, linha, linhaCode, secundLineCode, thirdLineCode, code, linkApli, price, qtd, aplicacoes, aplicacoesTwo, aplicacoesThree})
            writeFile(currentContent)
            res.send(currentContent)

        }

        
        
    }

    postBarrasAxiais(req, res){
        const {aplicacoes} = req.body
        const {aplicacoesTwo} = req.body
        const {aplicacoesThree} = req.body
        

        // console.log(cleanPath)
        if(aplicacoes && !aplicacoesTwo){
            const {nome, marca, info, linha, linhaCode, linkApli, sistema, aplicacoes} = req.body

            const price = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent.barrasAxiais.push({id, nome, image, marca, info, linha, linhaCode, code, linkApli, price, qtd, sistema, aplicacoes})
            writeFile(currentContent)
            res.send(currentContent)
        }

        else if(aplicacoesTwo && !aplicacoesThree){

            const {nome, marca, info, linha, linhaCode, secundLineCode, linkApli, sistema, aplicacoes, aplicacoesTwo} = req.body

            const price = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent.barrasAxiais.push({id, nome, image, marca, info, linha, linhaCode, secundLineCode, code, linkApli, price, qtd, sistema, aplicacoes, aplicacoesTwo})
            writeFile(currentContent)
            res.send(currentContent)

        }
        
        else if(aplicacoesThree){
            const {nome, marca, info, linha, linhaCode, secundLineCode, thirdLineCode, linkApli, sistema, aplicacoes, aplicacoesTwo, aplicacoesThree} = req.body

            const price = Number(req.body.price)
            const qtd = Number(req.body.qtd)
            const code = Number(req.body.code)
            const file = req.file

            if(!file){
                return res.status(400).json({ error: 'Nenhum arquivo enviado' });
            }
    
            // url publica da imagem!
            const image = `https://store-api-rxgw.onrender.com/uploads/${req.file.filename}`;

            const currentContent = readFile()
            const extraindoArrays = Object.values(currentContent)
            const achatandoArrays = extraindoArrays.flat()
        
            // definindo ID
            const id = Math.max(...achatandoArrays.map((item) => item.id)) + 1
        
            // salvando
            currentContent.barrasAxiais.push({id, nome, image, marca, info, linha, linhaCode, secundLineCode, thirdLineCode, code, linkApli, price, qtd, sistema, aplicacoes, aplicacoesTwo, aplicacoesThree})
            writeFile(currentContent)
            res.send(currentContent)

        }
    }




    updateBateriaYfluido(req, res){
    
        const id = req.params.id
        const {nome, image, marca, price, qtd } = req.body

        const path = req.path.replace(/\/\d+$/, '')
        const cleanPath = path.split('/').filter(segment => isNaN(segment)).join('/')
    
        const currentContent = readFile()
        const selectedItem = currentContent[cleanPath].findIndex(item => item.id == id)
        
        const {id: cId, nome: cNome, image: cImage, marca: cMarca, price: cPrice} = currentContent[cleanPath][selectedItem]
    
        const newObj = {
            id: cId,
            nome: nome ? nome: cNome,
            image: image ? image: cImage,
            marca: marca ? marca: cMarca,
            price: price ? price: cPrice,
            qtd: qtd 
        }

        currentContent[cleanPath][selectedItem] = newObj

        writeFile(currentContent)
        res.send(newObj)
    }


    updateEstruturaAplicacoes(req, res){
        const id = req.params.id
        const {nome, marca, info, price, code, qtd} = req.body

        const path = req.path.replace(/\/\d+$/, '')
        const cleanPath = path.split('/').filter(segment => isNaN(segment)).join('/')
        // 
        const currentContent = readFile()
        const selectedItem = currentContent[cleanPath].findIndex(item => item.id == id)
                                            // <>
        
        const {id: cId, nome: cNome, marca: cMarca, info: cInfo,  code: cCode,  price: cPrice, linkApli: cLinkApli,linhaCode: cLinhaCode, linha: cLinha, image: cImage} = currentContent[cleanPath][selectedItem]
                                                                                // <>

        let justApliOne = currentContent[cleanPath][selectedItem].aplicacoes
        let apliTwo = currentContent[cleanPath][selectedItem].aplicacoesTwo
        let apliThree = currentContent[cleanPath][selectedItem].aplicacoesThree
                                        // <>
        if(justApliOne && !apliTwo){
            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: cLinha,
                linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne
            }

            currentContent[cleanPath][selectedItem] = newObj
                            // <>
            writeFile(currentContent)
            res.send(newObj)
        }
        
        else if(apliTwo && !apliThree){

            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: cLinha,
                linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne,
                aplicacoesTwo: apliTwo
            }

            currentContent[cleanPath][selectedItem] = newObj
                            // <>
            writeFile(currentContent)
            res.send(newObj)

        }
        
        else if(apliThree){
            
            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: cLinha,
                linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne,
                aplicacoesTwo: apliTwo,
                aplicacoesThree: apliThree
            }

            currentContent[cleanPath][selectedItem] = newObj
                            // <>
            writeFile(currentContent)
            res.send(newObj)

        }
        
        
    }

    
    updateFiltroOleoPesado(req, res){

        const id = req.params.id
        const {nome, image, marca, info, linha, linhaCode, code, linkApli, price, qtd} = req.body

        const currentContent = readFile()
        const selectedItem = currentContent.filtroOleoPesado.findIndex(item => item.id == id)
                                            // <>
        const {id: cId, nome: cNome, image: cImage, marca: cMarca, info: cInfo, linha: cLinha, linhaCode: cLinhaCode, code: cCode, linkApli: cLinkApli, price: cPrice} = currentContent.filtroOleoPesado[selectedItem]
             // <>
    
        let justApliOne = currentContent.filtroOleoPesado[selectedItem].aplicacoes
        let apliTwo = currentContent.filtroOleoPesado[selectedItem].aplicacoesTwo
        let apliThree = currentContent.filtroOleoPesado[selectedItem].aplicacoesThree
                                        // <>
        if(justApliOne && !apliTwo){
            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: image ? image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: linha ? linha: cLinha,
                linhaCode: linhaCode ? linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: linkApli ? linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne
            }
                            // <>
            currentContent.filtroOleoPesado[selectedItem] = newObj
            writeFile(currentContent)
        }
        
        else if(apliTwo && ! apliThree){

            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: image ? image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: linha ? linha: cLinha,
                linhaCode: linhaCode ? linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: linkApli ? linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne,
                aplicacoesTwo: apliTwo
            }
                            // <>
            currentContent.filtroOleoPesado[selectedItem] = newObj
            writeFile(currentContent)

        }
        
        else if(apliThree){
            const newObj = {
                id: cId,
                nome: nome ? nome: cNome,
                image: image ? image: cImage,
                marca: marca ? marca: cMarca,
                info: info ? info: cInfo,
                linha: linha ? linha: cLinha,
                linhaCode: linhaCode ? linhaCode: cLinhaCode,
                code: code ? code: cCode,
                linkApli: linkApli ? linkApli: cLinkApli,
                price: price ? price: cPrice,
                qtd: qtd ,
                aplicacoes: justApliOne,
                aplicacoesTwo: apliTwo,
                aplicacoesThree: apliThree
            }
                            // <>
            currentContent.filtroOleoPesado[selectedItem] = newObj
            writeFile(currentContent)
        }
        
        res.send('Atualizado com Sucesso!')
        

    }



    deleting(req, res){
        const currentContent = readFile()    
    
        const {id} = req.params
        const path = req.path.replace(/\/\d+$/, '')
        const cleanPath = path.split('/').filter(segment => isNaN(segment)).join('/')
        
        const selectedItem = currentContent[cleanPath].findIndex((item) => item.id == id)
        currentContent[cleanPath].splice(selectedItem, 1)
    
        writeFile(currentContent)
        res.send(currentContent[cleanPath][selectedItem])
    }



}


export default new oleosController();
