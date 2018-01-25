(function() {
  'use strict';

  function FinalCtrl($location,searchConfig,cocktailSearch) {
    var vm = this;
    vm.boutton='';
    vm.buvons=buvons;
    vm.searchConfig=searchConfig;
    vm.cocktailSearch=cocktailSearch;
   
    function buvons() {
    	vm.searchConfig.ingredient = vm.boutton;
    	vm.cocktailSearch.getCocktails();
    };
    
    
   
  }
 

  FinalCtrl.$inject = ['$location','searchConfig','cocktailSearch'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();