const models = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var register = (req, res) => {
  console.log('req body', req.body)
  let password = req.body.password
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      models.create({
        username: req.body.username,
        email: req.body.email,
        password: hash
      })
      .then(result => {
        res.send({msg: 'Reqister Ok', result})
      })
      .catch(err => {
        res.send({err: err.msg})
      })
    })
  })
}

var login = (req, res) => {
  models.findOne({
      username: req.body.username
  })
  .then(result => {
    if (result == null) {
      res.send('username tidak ada')
    } else {
      let password = req.body.password
      if (bcrypt.compareSync(password, result.password)) {
        console.log('password', result.password)
        let token = jwt.sign({
          _id: result._id,
          username: result.username,
          email: result.email
        }, process.env.SECRET)
        res.send({msg: 'Login Ok', token: token})
      } else {
        res.send('Password Salah')
      }
    }
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {register,login}