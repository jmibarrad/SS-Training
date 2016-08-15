'use strict';

(function () {
  'use strict';

  var components = angular.module('app').directive('menuBox', menuBoxDirective);

  function menuBoxDirective() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        data: '='
      },
      templateUrl: 'components/menu/menu.html',
      controller: 'menuBoxController',
      controllerAs: 'vm',
      bindToController: true
    };
  };
})();