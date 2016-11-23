(function(){
  'use strict';

  angular.module('menuApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['categoriesList'];
  function categoriesController(categoriesList){
    var ctrl = this;
    ctrl.categoriesList = categoriesList.data;
  }
})();
