var db = require('./db/config');

var express = require('express');
var app = express();

app.set('views', 'public/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
