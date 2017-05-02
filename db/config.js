var mongoose = require('mongoose');

databaseURL = 'mongodb://localhost:27017/recorderdb';
mongoose.connect(databaseURL);

var db = mongoose.connection;

db.on('error', function(error) {
  console.error(`FAILURE: Failed to connect to database at ${databaseURL}
    Error: ${error}`);
});

db.on('open', function() {
  console.log(`SUCCESS: Successfully connected to database at ${databaseURL}`);
});
