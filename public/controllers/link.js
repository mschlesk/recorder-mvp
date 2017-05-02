angular.module('musicApp')
.directive('linkItem', function() {
  return {
    scope: {
      link: '<'
    },
    controllerAs: 'linkItemCtrl',
    bindToController: true,
    controller: function() {
      console.log(this);
    },
    templateUrl: 'views/link.ejs'
  }
});
