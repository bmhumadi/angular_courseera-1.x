(function(){
"use strict";

  angular.module("public")
  .service('FavoriteDish', FavoriteDish);

  FavoriteDish.$inject = ['$http','ApiPath', '$q'];
  function FavoriteDish($http,ApiPath,$q){
      var service = this;
      var favoriteDishShortName;
      service.verifyDish = function(shortName){
        return $http.get(ApiPath + "/menu_items/" + shortName + ".json")
                .then(function(response){
                  service.storeFavoriteDish(response.data);
                  return response.data;
                })
                .catch(function(error){
                  return $q.reject(error);
                });
      }

      service.getFavoriteDish = function(){
        return favoriteDishShortName;
      }

      service.storeFavoriteDish = function(favoriteDishData){
        favoriteDishShortName = favoriteDishData;
      }
  }

})();
