(function(){
  'use strict';

  angular.module('menuApp')
  .component('itemsListComponent',{
    templateUrl: 'src/menuApp/templates/itemsComponent.template.html',
    bindings : {
      items: '<'
    }
  });

})();
