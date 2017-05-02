angular.module('musicApp', [])
.directive('app', function(){
  // Runs during compile
  return {
    // controller: function($scope, $element, $attrs, $transclude) {},
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/app.ejs'
  };
});
