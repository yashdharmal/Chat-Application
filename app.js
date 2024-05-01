const express = require('express')
require('dotenv').config()

const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const userRouter = require('./route/user');
const { connectMongo } = require('./connection')



app.use(bodyParser.json())
app.use('/user', userRouter)

connectMongo(process.env.MONGO_URI)


app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
})