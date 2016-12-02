(function () {
"use strict";

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

  SignUpFormController.$inject = ['FavoriteDish'];
  function SignUpFormController(FavoriteDish) {
    var $ctrl = this;
    $ctrl.user = {};
    $ctrl.user.favoriteDish = "";
    $ctrl.message = "";

    $ctrl.submit = function(){
      $ctrl.message = "Your information has been saved";
    }
  }

})();
