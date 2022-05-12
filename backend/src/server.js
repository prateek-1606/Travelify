const express = require('express')
const userRouter = require('./routers/user')
const blogRouter = require('./routers/blog')
const User = require('.db/models/user')
const Blog = require('./db/models/blog')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(blogRouter)

app.listen(port,()=>{
    console.log('Server is up on port'+port)
})

