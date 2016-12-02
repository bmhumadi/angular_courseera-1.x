(function (){
'use strict';

angular.module('public')
.directive('dishValidator', DishValidator);

DishValidator.$inject=['FavoriteDish'];
function DishValidator(FavoriteDish){
  var ddo = {
    restrict: "A",
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl){
        ctrl.$asyncValidators.DishValidator = function (modelValue, viewValue){
          return FavoriteDish.verifyDish(viewValue);
        }
    }
  }
  return ddo;
}

})();
