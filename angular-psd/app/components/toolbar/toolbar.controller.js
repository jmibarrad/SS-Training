(function() {

  'use strict'

  angular.module('app').controller('toolbarController', toolbarController);

  toolbarController.$inject = [
    '$scope'
  ];

  function toolbarController($scope) {
    var vm = this;

    vm.user = vm.data.user;
    vm.options = vm.data.options;

  };

}());
