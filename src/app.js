import express from "express"
import cors from "cors"
import router from "./routes/products.js"
import usersRouter from "./routes/users.js"

const app = express()


app.use(cors())

app.use(cors({
    origin: 'https://store-api-rxgw.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json())
app.use(router)
app.use(usersRouter)
app.use('/uploads', express.static('uploads'))


export default app
