const { Schema, model } = require('mongoose')

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const BlogPost = model('BlogPost', blogPostSchema)

module.exports = BlogPost