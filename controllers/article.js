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

var getArticle = (req, res) => {
  models.find({})
  .populate('author', 'username')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.send(err)
  })
}

var update = (req, res) => {
  models.findById({
      _id: req.params.id
  })
  .then(resultUser => {
      if (req.headers.auth._id == resultUser.author) {
      models.update({
          _id: req.params.id
      }, {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      })
      .then(result => {
          res.send(result)
      })
      .catch(err => {
          res.send(err)
      })
      } else {
          res.send('tidak authorize')
      }
  })
}

var getOne = (req, res) => {
  models.findOne({
      _id: req.params.id
  })
  .then(result => {
      console.log('article', result)
      res.send(result)
  })
  .catch(err => {
      res.send(err)
  })
}

module.exports = {create,getArticle,update,getOne}