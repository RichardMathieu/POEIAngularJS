(function() {
  'use strict';

  function FinalCtrl($location,searchConfig) {
    var vm = this;
    vm.boutton='';
    vm.buvons=buvons;
    vm.searchConfig=searchConfig;
    function buvons() {
    	vm.searchConfig.ingredient = vm.boutton;
    	console.log(vm.searchConfig.ingredient)
    }
    
   
  }
 

  FinalCtrl.$inject = ['$location','searchConfig'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();