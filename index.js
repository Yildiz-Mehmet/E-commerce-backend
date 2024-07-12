const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')
const cookieParser = require('cookie-parser')


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.use(cookieParser())

const PORT = 8080 || process.env.MONGODB_URI


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('Server is running')
        console.log('connect to db')
    })
})
