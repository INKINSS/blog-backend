const { Router } = require('express')
const { Principal } = require('../controllers/controller')
const router = Router()

router.get('/', Principal );

module.exports = router;