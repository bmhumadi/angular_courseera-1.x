(function(){
  'use strict';

  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController', narrowItDownController)
  .service('MenuSearchService', menuSearchService)
  .directive('foundItems', foundItemsDirective)
  .directive('loader', loaderDirective)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com/");

  narrowItDownController.$inject = ['MenuSearchService'];
  function narrowItDownController(MenuSearchService){
    var ctrl = this;

    ctrl.searchTerm = "";
    ctrl.showErrorMessage = false;
    ctrl.showLoader = false;
    ctrl.getMatchedItems = function(search){
      if(search.trim() == ""){
        ctrl.showErrorMessage = true;
        ctrl.found = [];
      } else {
        var promise = MenuSearchService.getMatchedMenuItems(search);
        ctrl.showErrorMessage = false;
        ctrl.showLoader = true;
        promise.then(function(menuItems){
          ctrl.showLoader = false;
          if(menuItems.length === 0){
            ctrl.showErrorMessage = true;
          } else {
            ctrl.showErrorMessage = false;
          }
          ctrl.found = menuItems;
        });
      }
    };

    ctrl.removeItem = function(index){
      ctrl.found.splice(index,1);
      if(ctrl.found.length === 0){
        ctrl.showErrorMessage = true;
      }
    };

  }

  menuSearchService.$inject = ['$http', 'ApiBasePath'];
  function menuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){

      return $http({
        method: 'GET',
        url: ApiBasePath + 'menu_items.json'
      }).then(function(response){
        var results = response.data.menu_items;
        var newResults = [];
        var len = results.length;
        for(var i = 0; i< len; i++){
          if(results[i].description.indexOf(searchTerm) !== -1){
            newResults.push(results[i]);
          }
        }
        return newResults;
      });
    }
  }

  function foundItemsDirective(){
    var ddo = {
      templateUrl: 'views/foundItems.html',
      scope: {
        found : '<',
        onRemove : '&'
      }
    }
    return ddo;
  }

  function loaderDirective(){
    var ddo = {
      templateUrl: 'loader/itemsloaderindicator.template.html'
    }
    return ddo;
  }
})();
