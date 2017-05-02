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
    // console.log('Made it past middleware!');
  }
};

module.exports = routes;
