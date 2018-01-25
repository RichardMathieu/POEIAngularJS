(function() {
  'use strict';

  function cockDtlCtrl($location,cocktailSearch) {
    var vm = this;
    vm.cocktailSearch=cocktailSearch;
    
  }
 

  cockDtlCtrl.$inject = ['$location','cocktailSearch'];

  angular.module('daproject')
    .controller('cockDtlCtrl', cockDtlCtrl);

})();