import express from "express"
import cors from "cors"

const app = express()




import routesOleos from "./routes/route.oleos.js"
import routesFiltros from "./routes/route.filtros.js"
import routesSistemaDir from "./routes/route.sistema_dir.js"
import routesSuspensao from "./routes/route.suspensao.js"
import routesFreio from './routes/route.freios.js'
import routesIgnicao from './routes/route.ignicao.js'
import routesCarga from './routes/route.carga.js'
import routesArrefecimento from './routes/route.arrefecimento.js'
import routesPartida from './routes/route.partida.js'
import routesInjecao from './routes/route.injecao.js'
import routesTransmissao from './routes/route.transmissao.js'
import routesRodagem from './routes/route.rodagem.js'
import routesEscapes from './routes/route.escapes.js'

import usersRouter from "./routes/users.js"



app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))


app.use(routesOleos)
app.use(routesFiltros)
app.use(routesSistemaDir)
app.use(routesSuspensao)
app.use(routesFreio)
app.use(routesIgnicao)
app.use(routesCarga)
app.use(routesArrefecimento)
app.use(routesPartida)
app.use(routesInjecao)
app.use(routesTransmissao)
app.use(routesRodagem)
app.use(routesEscapes)


app.use(usersRouter)



export default app;
