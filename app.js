const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
// mongoose.connect('mongodb://livecoding:livecoding@cluster0-shard-00-00-mtaex.mongodb.net:27017,cluster0-shard-00-01-mtaex.mongodb.net:27017,cluster0-shard-00-02-mtaex.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
mongoose.connect('mongodb://localhost/codeliv')

var app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var index = require('./routes/index')

app.use('/', index)

app.listen(process.env.PORT || 3000)
