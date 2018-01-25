(function() {
    'use strict';
  
    function searchConfig($http) {
      var searchConfig = {};
     searchConfig.ingredient = "";
      
       

      return  searchConfig;
    }

   searchConfig.$inject = ['$http'];
    
    angular.module('daproject')
        .factory('searchConfig', searchConfig);
  
})();