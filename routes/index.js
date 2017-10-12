const express = require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')

router.post('/register', userControl.register)
router.post('/login', userControl.login)

module.exports = router