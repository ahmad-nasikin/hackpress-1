const jwt = require('jsonwebtoken')

var isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, secret, (err, decoded) => {
    if (err) {
      res.send('Anda Harus Login Dulu')
    } else {
      next()
    }
  }
}

var authorisasi = (req, res, next) => {
  if (req.headers.hasOwnProperty('token')) {
    var user = jwt.verify(req.headers.token, secret)
    console.log('testing authorisasi', user)
    req.headers.auth = user
    console.log('header',req.headers.auth)
    next()
  } else {
    res.send('tidak authorize')
  }
}

module.exports = {isLogin, authorisasi}