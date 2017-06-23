var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require("express-session")

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, './public/dist')))
app.use(session({
  secret: 'fsfewf3',
  resave: false,
  saveUninitialized: true
}))

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js')
routes_setter(app)

app.listen(8000, ()=>{
  console.log('listening on port 8000')
})