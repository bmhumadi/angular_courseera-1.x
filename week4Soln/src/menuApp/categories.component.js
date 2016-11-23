(function(){
  'use strict';

  angular.module('menuApp')
  .component('categoriesListComponent',{
    templateUrl: 'src/menuApp/templates/categoriesComponent.template.html',
    bindings : {
      categoriesList: '<'
    },
  });

})();
