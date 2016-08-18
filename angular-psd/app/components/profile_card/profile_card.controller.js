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

/*
    vm.colors = vm.buttons.map(s => s.color);
    console.log(vm.colors);

    let obj = {name: 'Jose', fields: [{repo: 1},{child: 2},{field: 'my field'}]};
    let objCopy = Object.assign({}, obj);


    obj.name = 'not modify please';
    obj.fields[0].repo = 2;
    console.log('copy');
    console.log(objCopy.name);

    objCopy.name = 'hammer';
    objCopy.fields[1].child += 7;
    console.log('original');

    console.log(obj);
    console.log('copy');

    console.log(objCopy);
*/

  };

}());
