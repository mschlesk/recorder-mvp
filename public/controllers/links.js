angular.module('musicApp')
.controller('linksController', function() {

})
.directive('links', function() {
  return {
    scope: {
      links: '<'
    },
    controllerAs: 'ctrl',
    controller: 'linksController',
    templateUrl: 'views/links.ejs'
  }
});