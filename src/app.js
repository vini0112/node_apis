import express, { Router, json } from "express"
import path, { dirname } from 'path'
import cors from "cors"
import router from "./routes/products.js"
import usersRouter from "./routes/users.js"

const app = express()

app.use(cors())
app.use(express.json())

// Serve a pasta "uploads" para acessar as imagens
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(router)
app.use(usersRouter)
// app.use('/uploads', express.static(path.join(__filename, 'uploads')))


export default app
