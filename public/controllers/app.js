angular.module('musicApp', [])
.directive('app', function(){
  // Runs during compile
  return {
    bindToController: true,
    controllerAs: 'appCtrl',
    controller: function($scope, linksApi) {
      console.log($scope);
      linksApi.fetchLinks(function() {

      });
    },
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/app.ejs'
  };
});
