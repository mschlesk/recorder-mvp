var Link = require('../public/models/link');

var routes = {
  logRequest: function(req, res, next) {
    console.log(`  ${req.method} request received\n  body:`);
    for (var key in req.body) {
      console.log(`    ${key}: ${req.body[key]}`);
    }
    next();
  },

  getLinks: function(req, res) {
    Link.find({}).then(function(links) {
      if (!links) {
        // something bad has happened? Or there just aren't any links?
      }
      res.json(links);
    });
  },

  postLinks: function(req, res) {
    var url = req.body.url;
    var title = req.body.title;
    var artist = req.body.artist;
    // Link.findOne({url: req.body.url}, { url: 1, dateCreated: 1 }).then(function(found) {
    Link.findOne({url: req.body.url}).then(function(found) {
      if (found) { // link already exists
        console.log('    SUCCESS: Successfully fetched link from database');
        res.json(found);
      } else {  // new link
        console.log('    SUCCESS: Unable to fetch link from database.\n      Creating new link...');
        // Link.create({ url: url }, { url: 1, dateCreated: 1 }).then(function(link) {
        Link.create({ url: url, title: title, artist: artist }).then(function(link) {
          if (!link) {  // handle error
            console.error('      Failed to  create link!');
            res.status(500).send();
          } else {
            console.log('      Link created!');
            res.json(link);
          }
        });
      }
    })
  }
};

module.exports = routes;
