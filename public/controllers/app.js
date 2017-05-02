angular.module('musicApp', [])
.directive('app', function(){
  // Runs during compile
  return {
    scope: {},
    bindToController: true,
    controllerAs: 'appCtrl',
    controller: function($scope, linksApi) {
      this.linksHandler = (links) => {
        this.links = links;
      }
      linksApi.fetchLinks(this.linksHandler);
      console.log($scope);
    },
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/app.ejs'
  };
});
