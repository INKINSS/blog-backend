const { Router } = require('express')
const { createPost, getAllPost } = require('../controllers/post')
const { Principal, About, Contact, Post, } = require('../controllers/controller');
const router = Router()


//view
router.get('/', Principal );
router.get('/about', About);
router.get('/contact', Contact);
router.get('/post', Post)

//api
router.post('/createPost', createPost)
router.get('/getAllPost', getAllPost)

module.exports = router;