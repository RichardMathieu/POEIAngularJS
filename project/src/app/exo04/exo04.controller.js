(function() {
  'use strict';

  function Exo04Ctrl($location,settingService, meteo) {
    var vm = this;
    vm.mod = null;
    vm.testMod = testMod;
    vm.lien = lien;
    vm.setting=settingService;
    vm.meteo=meteo;

     function testMod($location) {
      console.log(vm.mod)
     }
     function lien() {
      $location.path('/more');
     }
  }
 

  Exo04Ctrl.$inject = ['$location','settingService','meteo'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();