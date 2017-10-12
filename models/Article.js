const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: [
    String
  ],
  author: {
    type: ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article