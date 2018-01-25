(function() {
  'use strict';

  function FinalCtrl($location,searchConfig,cocktailSearch) {
    var vm = this;
    vm.boutton='';
    vm.buvons=buvons;
    vm.searchConfig=searchConfig;
    vm.cocktailSearch=cocktailSearch;
    vm.lien=lien;
    function buvons() {
    	vm.searchConfig.ingredient = vm.boutton;
    	vm.cocktailSearch.getCocktails();
    };
    function lien() {
    	console.log("aa");
      $location.path('/cocktailDetail');

     };
    
   
  }
 

  FinalCtrl.$inject = ['$location','searchConfig','cocktailSearch'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();