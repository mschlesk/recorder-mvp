angular.module('musicApp')
.directive('inputBox', function(){
  // Runs during compile
  return {
    scope: {
      // inputUrl: '<'
      postLink: '<'
    },
    controllerAs: 'inputCtrl',
    bindToController: true,
    controller: function() {
      this.onClick = function() {
        console.log(this.inputUrl);
        // console.log()
        this.postLink({
          url: this.inputUrl,
          title: this.inputTitle,
          artist: this.inputArtist
        });

        this.inputUrl = '';
      };
    },
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/inputBox.ejs',
  };
});