const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const blogPostSchema = new Schema({
    title: String,
    body: String,
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)