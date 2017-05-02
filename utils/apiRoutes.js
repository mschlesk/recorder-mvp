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
    Link.findOne({url: req.body.url}).then(function(error, found) {
      if (error) {  // handle error
        console.error(`  FAILURE: Failed to fetch link from database:\n    "${url}"`);
      } else if (found) { // link already exists
        console.log(`  SUCCESS: Successfully fetched link from database:\n    "${url}"`);
      } else {  // new link
        console.log(`  SUCCESS: Unable to fetch link from database. Creating new link.:\n    "${url}"`);
      }
    })
  }
};

module.exports = routes;
