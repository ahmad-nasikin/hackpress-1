const models = require('../models/Article')
const jwt = require('jsonwebtoken')

var create = (req, res) => {
  console.log('ini header ...', req.headers.auth)
  models.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.auth._id
  })
  .then((result) => {
    console.log('author', result.author)
    console.log('ini result', result)
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  }) 
}



module.exports = {create}