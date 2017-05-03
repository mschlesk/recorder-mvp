var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db = require('../../db/config');

var linkSchema = mongoose.Schema({
  url: String,
  title: String,
  artist: String,
  album: String,
  // host: String,
  dateCreated: { type: Date, default: Date.now }
});

// linkSchema.methods.delete = function() {};

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
