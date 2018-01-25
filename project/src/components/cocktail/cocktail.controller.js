(function() {
  'use strict';

  function CocktailCtrl($location,cocktailSearch) {
    var vm = this;
    vm.lien=lien;
    vm.cocktailSearch=cocktailSearch;
    vm.selectedElement='';
    function lien() {
      cocktailSearch.getCocktailsDetails(vm.cocktailElement.idDrink).then(function(){
        $location.path('/cocktailDetail');
      });
     };
    
  }
 

  CocktailCtrl.$inject = ['$location','cocktailSearch'];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();