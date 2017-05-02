angular.module('musicApp')
.directive('links', function() {
  return {
    scope: {
      linksArray: '<'
    },
    controllerAs: 'linksCtrl',
    bindToController: true,
    controller: function() {
      // console.log(this);
    },
    templateUrl: 'views/links.ejs'
  }
});