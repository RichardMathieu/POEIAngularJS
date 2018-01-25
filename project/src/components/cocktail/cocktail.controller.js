(function() {
  'use strict';

  function CocktailCtrl($location) {
    var vm = this;
    vm.lien=lien;

    function lien() {
      
      $location.path('/cocktailDetail');

     };
    
  }
 

  CocktailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();