var express = require('express');
var app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
