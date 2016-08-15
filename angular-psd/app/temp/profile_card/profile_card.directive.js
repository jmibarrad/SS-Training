'use strict';

(function () {
  'use strict';

  var components = angular.module('app').directive('profileCard', profileCardDirective);

  function profileCardDirective() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        data: '='
      },
      templateUrl: 'components/profile_card/profile_card.html',
      controller: 'profileCardController',
      controllerAs: 'vm',
      bindToController: true
    };
  };
})();