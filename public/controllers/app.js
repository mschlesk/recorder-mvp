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
      };

      this.update = () => {
        linksApi.fetchLinks(this.linksHandler);
      };
      // console.log(this);
      this.postNewLink = (linkObject) => {
        // var treatedLinkObject = {
        //   url: linkObject.url,
        //   title: linkObject.title,
        //   artist: linkObject.artist
        //   album: linkObject.album,
        //   host: linkObject.host,
        // }
        linksApi.postLink(linkObject, this.update);
      };

      this.update();
    },
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: '/views/app.ejs'
  };
});
