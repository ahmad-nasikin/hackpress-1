const express = require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')
const articleControl = require('../controllers/article')
const auth = require('../auth/auth')

router.post('/register', userControl.register)
router.post('/login', userControl.login)
router.post('/articles', auth.isLogin, auth.authorisasi, articleControl.create)

module.exports = router