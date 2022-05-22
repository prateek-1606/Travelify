const express = require('express')
const mongoose = require('mongoose');
const userRouter = require('./routers/user')
const blogRouter = require('./routers/blog')
const env = require('dotenv')
const cors = require('cors');

env.config();
const app = express()
app.use(cors({ origin: true, credentials: true }));
const port = process.env.PORT || 3001

mongoose.connect(process.env.mongodb).then(() => {
    return app.listen({ port })
})
    .then(() => {
        console.log('server is connected');
    })
    .catch(e => console.log(e))

app.use(express.json())
app.use(userRouter)
app.use(blogRouter)