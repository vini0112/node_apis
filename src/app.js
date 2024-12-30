import express, { Router, json } from "express"

import cors from "cors"

import router from "./routes/products.js"
import usersRouter from "./routes/users.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(usersRouter)



export default app
