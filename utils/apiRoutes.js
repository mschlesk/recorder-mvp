var Link = require('../public/models/link');

var routes = {
  getLinks: function(req, res) {

  },

  postLinks: function(req, res) {
    console.log('  POST request received\n  body:');
    for (var key in req.body) {
      console.log(`    ${key}: ${req.body[key]}`);
    }
  }
};

module.exports = routes;
