(function(){
'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['FavoriteDish', 'ApiPath'];
  function MyInfoController(FavoriteDish, ApiPath){
    var $ctrl = this;
    $ctrl.hasUserSignedUp = false;

    var favoriteDishObject = FavoriteDish.getFavoriteDish();
    if(favoriteDishObject !== undefined){
      $ctrl.hasUserSignedUp = true;
      $ctrl.favoriteDish = {};
      $ctrl.favoriteDish.hasImage = favoriteDishObject.image_present;
      $ctrl.favoriteDish.imageUrl = ApiPath + "/images/"+favoriteDishObject.short_name+".jpg",
      $ctrl.favoriteDish.title = favoriteDishObject.name;
      $ctrl.favoriteDish.description = favoriteDishObject.description;
    }
  }

})();
