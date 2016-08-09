(function() {

  'use strict'

  angular.module('app').controller('profileCardController', profileCardController);

  profileCardController.$inject = [
    '$scope'
  ];

  function profileCardController($scope) {
    var vm = this;

    vm.username = vm.data.username;
    vm.user_description = vm.data.user_description;
    vm.buttons = vm.data.buttons;

  };

}());
