angular.module('musicApp', [])
.directive('app', function(){
  // Runs during compile
  return {
    bindToController: true,
    controllerAs: 'appCtrl',
    controller: function($scope, $http) {
      console.log($scope);
    },
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/app.ejs'
  };
});
