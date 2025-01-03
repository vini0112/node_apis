import express, { Router, json } from "express"
import path from 'path'
import cors from "cors"
import router from "./routes/products.js"
import usersRouter from "./routes/users.js"
import { fileURLToPath } from "url"

const app = express()

// const fileName = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(fileName)

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use(router)
app.use(usersRouter)



export default app
