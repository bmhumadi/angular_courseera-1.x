(function(){
  'use strict';

  angular.module('menuApp')
  .controller('ItemsController', itemsController);

  itemsController.$inject = ['items'];
  function itemsController(items){
    var ctrl = this;
    ctrl.items = items.data.menu_items;
    ctrl.categoryName = items.data.category.name;
  }

})();
