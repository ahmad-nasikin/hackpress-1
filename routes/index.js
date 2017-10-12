const express = require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')
const articleControl = require('../controllers/article')
const auth = require('../auth/auth')

router.post('/register', userControl.register)
router.post('/login', userControl.login)
router.post('/articles', auth.isLogin, auth.authorisasi, articleControl.create)
router.get('/articles', articleControl.getArticle)
router.put('/article/:id', auth.isLogin, auth.authorisasi, articleControl.update)
router.get('/article/:id', articleControl.getOne)
router.delete('/article/:id', auth.isLogin, auth.authorisasi, articleControl.deleteArticle)

module.exports = router