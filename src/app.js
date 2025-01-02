import express, { Router, json } from "express"
import path, { dirname } from 'path'
import cors from "cors"
import router from "./routes/products.js"
import usersRouter from "./routes/users.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(usersRouter)
app.use(express.static('uploads'))


export default app
