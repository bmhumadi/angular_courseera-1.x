(function () {
  'use strict';

  angular.module('data').
  service('MenuDataService', menuDataService)
  .constant('ApiBasePath','https://davids-restaurant.herokuapp.com/');

  menuDataService.$inject = ['$http', 'ApiBasePath'];
  function menuDataService($http, ApiBasePath){
    var service = this;

    service.getAllCategories = function(){
      return $http({
        method: 'GET',
        url: ApiBasePath + 'categories.json'
      });
    }

    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: 'GET',
        url: ApiBasePath + 'menu_items.json',
        params: {
          category: categoryShortName
        }
      });
    }
    
  }

})();
