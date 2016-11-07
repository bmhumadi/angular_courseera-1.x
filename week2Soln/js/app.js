(function(){
  'use strict';

  angular.module("ShoppingListCheckOff",[]).
  controller("ToBuyController", toBuyController).
  controller("AlreadyBoughtController", alreadyBoughtController).
  service("ShoppingListCheckOffService", shoppingListCheckOffService);


  toBuyController.$inject = ['ShoppingListCheckOffService'];
  function toBuyController(ShoppingListCheckOffService){
    this.items = ShoppingListCheckOffService.getToBuyItems();

    this.buyItem = function($index){
      ShoppingListCheckOffService.markAsBought($index);
    }
  }

  alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function alreadyBoughtController(ShoppingListCheckOffService){
    this.items = ShoppingListCheckOffService.getboughtItems();
  }

  function shoppingListCheckOffService(){

    var service = this;

    var toBuyItems = [
      {
          name : 'cookies',
          quantity : 10,
      },
      {
          name : 'soccer shoes',
          quantity : 1,
      },
      {
          name : 'leather wallet',
          quantity : 1,
      },
      {
          name : 'oranges',
          quantity : 5,
      },
      {
          name : 'soccer ball',
          quantity : 1,
      },
      {
          name : 'magazines',
          quantity : 3,
      },
    ];

    var boughtItems = [];

    service.getToBuyItems = function(){
      return toBuyItems;
    }

    service.getboughtItems = function(){
      return boughtItems;
    }

    service.markAsBought = function(index){
      var removedItem = toBuyItems.splice(index,1);
      boughtItems.push(removedItem[0]);
    }

  }


})();
