(function(){
  'use strict'
    var components = angular.module('app').directive('newsletter', newsletterDirective);

    function newsletterDirective() {
        return {
          restrict: 'E',
          transclude: true,
          scope: {
            title: '='
          },
          templateUrl: 'components/newsletter/newsletter.html',
          controller: 'newsletterController',
          controllerAs: 'vm',
          bindToController: true
        }

    };

}());
