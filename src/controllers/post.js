const BlogPost = require('../models/BlogPost')

const createPost = async (req, res) => {
    try {
        const { title, body } = req.body
        const newPost = new BlogPost({ title, body })
        await newPost.save()
        res.status(201).json({ message: 'Post created' })  
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

const getAllPost = async (req,res) => {
    try {
        const posts = await BlogPost.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = {
    createPost,
    getAllPost
}