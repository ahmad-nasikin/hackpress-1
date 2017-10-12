const models = require('../models/Article')
const jwt = require('jsonwebtoken')

var create = (req, res) => {
  console.log('ini header', req.headers.token)
  models.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.auth_id
  })
  .then((result) => {
    console.log('ini result', result)
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  }) 
}



module.exports = {create}