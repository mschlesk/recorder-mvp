var mongoose = require('mongoose');
var db = require('../../db/config');

var linkSchema = mongoose.Schema({
  url: String,
  title: String,
  // artist: String,
  // album: String,
  // host: String,
  dateCreated: { type: Date, default: Date.now }
});

var Link = mongoose.model('Link', linkSchema);
