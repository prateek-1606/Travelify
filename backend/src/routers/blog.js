const express = require('express')
const Blog = require('../models/blog')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/blogs', auth, async(req, res) => {
    const blog = new Blog({
        ...req.body,
        owner:req.user._id
    })
    try{
        await blog.save()
        res.status(200).send(blog)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/blogs', async(req,res) => {
    try {
        const blogs = await Blog.find({})
        res.send(blogs)
    }
    catch (e) {
        res.status(500).send()
    }
})

router.get('/blogs/:id', async(req,res) => {
    const _id = req.params.id

    try {
        const blog = await Blog.findOne({_id})
        if(!blog){
            return res.status(404).send()
        }

        res.send(blog)
    } catch {
        res.status(500).send()
    }
})

module.exports = router
