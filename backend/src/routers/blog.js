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

router.delete('/blogs/:id', auth, async(req,res) => {
    try {
        const _id = req.params.id
        const blog = await Blog.deleteOne({_id , owner : req.user._id})
        if(!blog){
            return res.status(404).send()
        }
        
        res.send(blog)
    }catch (e) {
        res.status(404).send()
    }
})

router.patch('/blogs/:id', auth, async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title','source','destination','content','ExpensePerHead','AvailableSeats']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(404).send({error:'Invalid updates!'})
    }

    const _id = req.params.id
    try {
        const blog = await Blog.findOne({_id , owner:req.user._id})
        
        if(!blog){
            return res.status(404).send()
        }

        updates.forEach((update) => blog[update] = req.body[update])
        await blog.save()
        res.send(blog)
    }catch (e) {
        res.status(400).send(e.message)
    }
})

router.post('/blogs/addLike/:id' , auth, async(req , res) => {
    try {
        const blog = await Blog.findOne({_id:req.params.id})
        if(!blog){
            return res.status(404).send({error: 'Invalid id!'})
        }

        blog.Likes = blog.Likes.concat({userid:req.user._id})

        await blog.save()
        res.send(blog)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
