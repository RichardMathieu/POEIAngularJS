(function() {
  'use strict';

  function Exo04Ctrl($location,settingService ) {
    var vm = this;
    vm.mod = null;
    vm.testMod = testMod;
    vm.setting=settingService;

     function testMod($location) {
      console.log(vm.mod)
     }
  }
 

  Exo04Ctrl.$inject = ['$location','settingService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();