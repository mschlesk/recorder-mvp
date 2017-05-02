angular.module('musicApp')
.service('linksApi', function($http){
  this.fetchLinks = function(callback) {
    $http.get('/api/links').then(function(response) {
      console.log(response.body);
      // callback(response.body);
    }, function(response) {
      console.error(`Failed to fetch links from /api/links, status code: ${response.status}`);
      // callback(null);
    });
  };
});