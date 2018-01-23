(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    vm.response=false;
    vm.moncac= moncac;
     
     function moncac(){
      vm.response = !vm.response;
      
    }
    
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
