const path = require('path');

const Principal = (req, res, next) => {
    res.render('index')
};

const About = (req, res, next) => {
    res.render('about')
};

const Contact = (req, res, next) => {
    res.render('contact')
};

const Post = (req, res, next) => {
    res.render('post')
}

module.exports = {
    Principal,
    About,
    Contact,
    Post
 };