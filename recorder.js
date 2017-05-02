var db = require('./db/config');
var Link = require('./public/models/link');
var apiRoutes = require('./utils/apiRoutes');

var bodyparser = require('body-parser');

var express = require('express');
var app = express();

app.set('views', 'public/views');
app.set('view engine', 'ejs');

// Parse request body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
