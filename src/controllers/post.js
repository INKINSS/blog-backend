const BlogPost = require('../models/BlogPost')

const CreatePost = async (req, res) => {
    try {
        const { title, body } = req.body
        const newPost = new BlogPost({ title, body })
        await newPost.save()
        res.status(201).json({ message: 'Post created' })  
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = {
    CreatePost
}