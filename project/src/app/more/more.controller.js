(function() {
  'use strict';

  function MoreCtrl($location,meteo) {
    var vm = this;
    vm.meteo=meteo;

   
  }
 

  MoreCtrl.$inject = ['$location','meteo'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();