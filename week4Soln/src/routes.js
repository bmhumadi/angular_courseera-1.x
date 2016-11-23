(function(){
  'use strict';

  angular.module('menuApp')
  .config(RoutesConfig);


  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    //home view
    .state('home',{
      url: '/',
      templateUrl: 'src/menuApp/templates/home.template.html'
    })
    //categories view
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuApp/templates/categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categoriesList: ['MenuDataService', function(MenuDataService){
                          return MenuDataService.getAllCategories();
                        }]
      }
    })
    //category items view
    .state('items', {
      url: '/categories/{categoryShortName}',
      templateUrl: 'src/menuApp/templates/items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
               }]
      }
    });
  }

})();
