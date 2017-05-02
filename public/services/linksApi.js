angular.module('musicApp')
.service('linksApi', function($http){
  this.fetchLinks = function(callback) {
    $http.get('/api/links').then(function(response) {
      console.log(`Fetched ${response.data.length} links from server`);
      callback(response.data);
    }, function(response) {
      console.error(`Failed to fetch links from /api/links, status code: ${response.status}`);
      callback([]);
    });
  };
});