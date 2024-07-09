const { Router } = require('express')
const { Principal, About, Contact, Post, } = require('../controllers/controller')
const router = Router()

router.get('/', Principal );
router.get('/about', About);
router.get('/contact', Contact);
router.get('/post', Post)

module.exports = router;