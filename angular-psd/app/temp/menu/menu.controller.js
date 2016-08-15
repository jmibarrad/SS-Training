'use strict';

(function () {

  'use strict';

  angular.module('app').controller('menuBoxController', menuBoxController);

  menuBoxController.$inject = ['$scope'];

  function menuBoxController($scope) {
    var vm = this;

    vm.title = vm.data.title;
    vm.items = vm.data.items;
  };
})();