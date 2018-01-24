(function() {
  'use strict';

  function Exo04Ctrl($location) {
    var vm = this;
    vm.mod = null;
    vm.testMod = testMod;

     function testMod($location) {
      console.log(vm.mod)
     }
  }
 

  Exo04Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();