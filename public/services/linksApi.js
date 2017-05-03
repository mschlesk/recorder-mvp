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

  this.postLink = function(linkObject, callback) {
    $http.post('/api/links', linkObject).then(function(response) {
      console.log('Posted link to server');
      console.log(response.body);
      callback(response.body);
    }, function(response) {
      console.error(`Failed to post link to /api/links, status code: ${response.status}`);
      callback(null);
    });
  };
});

