module.config(function ($routeProvider) {
 $routeProvider
   .when('/', {
     templateUrl: 'index.html',
     controller: 'HomeController',
     controllerAs: 'home'
   });
});
