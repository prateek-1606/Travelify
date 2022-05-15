const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3001

mongoose.connect('mongodb+srv://Ashish_Raikwar:priya1234@cluster0.ja7nr.mongodb.net/Travelify?retryWrites=true&w=majority').then(() =>{
    return app.listen({port})
})
.then(() => {
    console.log('server is connected');
})
.catch(e => console.log(e))

app.use(express.json())
app.use(userRouter)