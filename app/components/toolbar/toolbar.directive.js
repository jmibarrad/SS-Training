(function(){
  'use strict'
    var components = angular.module('app').directive('toolbar', toolbarDirective);

    function toolbarDirective() {
        return {
          restrict: 'E',
          transclude: true,
          scope: {
            data: '='
          },
          templateUrl: 'components/toolbar/toolbar.html',
          controller: 'toolbarController',
          controllerAs: 'vm',
          bindToController: true
        }

    };

}());
