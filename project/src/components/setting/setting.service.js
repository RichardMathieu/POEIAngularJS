(function() {
    'use strict';
  
    function settingService() {
      var settingService = {};
      settingService.city='';
      settingService.isCelsius=true;

      return  settingService;
    }

    settingService.$inject = [];
    
    angular.module('daproject')
        .factory('settingService', settingService);
  
})();