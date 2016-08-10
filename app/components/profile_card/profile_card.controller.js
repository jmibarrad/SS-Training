(function() {

  'use strict'

  angular.module('app').controller('profileCardController', profileCardController);

  profileCardController.$inject = [
    '$scope'
  ];

  function profileCardController($scope) {
    var vm = this;

    vm.username = vm.data.user.username;
    vm.user_description = vm.data.user.user_description;
    vm.buttons = vm.data.buttons;

    vm.colors = vm.buttons.map(s => s.color);
    console.log(vm.colors);
  };

}());
