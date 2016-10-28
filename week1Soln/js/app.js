(function(){
  'use strict';

  angular.module("LunchCheck",[]).
  controller("LunchCheckController", launchCheckController);
  launchCheckController.$inject = ['$scope'];

  function launchCheckController($scope){
    $scope.message = "";
    $scope.dishes = "";
    $scope.messageStyle = "";

    $scope.getListCount = function(){
      var dishesList = $scope.dishes.split(",");
      var len = dishesList.length;

      //empty items are not considered toward the count
      for(var i=0;i<len;i++){
        if(dishesList[i].trim() == ""){
          dishesList.splice(i,1);
          i--;
          len--;
        }
      }
      return dishesList.length;
    }

    $scope.checkIfTooMuch = function(){
      var count = $scope.getListCount();
      if(count === 0){
        $scope.message = "Please enter data first";
        $scope.messageStyle = "error";
      } else if (count <= 3){
        $scope.message = "Enjoy!";
        $scope.messageStyle = "success";
      } else {
        $scope.message = "Too much!";
        $scope.messageStyle = "success";
      }
    }
  }

})();
