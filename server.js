var morgan = require('morgan');
var app = require('./recorder.js');
var port = 8085;

app.use(morgan('dev'));

app.listen(
  port,
  function() {
    console.log(`Server started: listening on port ${port} and heartbreaks`);
  }
);
