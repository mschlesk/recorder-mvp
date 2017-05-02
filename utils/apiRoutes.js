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

  },

  postLinks: function(req, res) {
    var url = req.body.url;
    Link.findOne({url: req.body.url}).then(function(found) {
      if (found) { // link already exists
        console.log('    SUCCESS: Successfully fetched link from database');
      } else {  // new link
        console.log('    SUCCESS: Unable to fetch link from database.\n      Creating new link...');
        Link.create({ url: url }).then(function(link) {
          if (!link) {  // handle error
            console.error('      Failed to  create link!');
          } else {
            console.log('      Link created!');
          }
        });
      }
    })
  }
};

module.exports = routes;
