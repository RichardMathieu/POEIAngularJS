(function() {
  'use strict';

  function Exo04Ctrl($location,settingService, meteo) {
    var vm = this;
    vm.mod = null;
    vm.testMod = testMod;
    vm.setting=settingService;
    vm.meteo=meteo;

     function testMod($location) {
      console.log(vm.mod)
     }
  }
 

  Exo04Ctrl.$inject = ['$location','settingService','meteo'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();