const jwt = require('jsonwebtoken')
require('dotenv').config()


var isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.send('Anda Harus Login Dulu')
    } else {
      next()
    }
  })
}

var authorisasi = (req, res, next) => {
  console.log('masuk authorisasi')
  if (req.headers.hasOwnProperty('token')) {
    var user = jwt.verify(req.headers.token, process.env.SECRET)
    console.log('testing authorisasi', user)
    req.headers.auth = user
    console.log('header',req.headers.auth)
    next()
  } else {
    res.send('tidak authorize')
  }
}

module.exports = {isLogin, authorisasi}