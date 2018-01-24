(function() {
    'use strict';
  
    function meteo($http, settingService) {
      var meteo = {};
      meteo.meteoListe = [];
      meteo.getMeteo = getMeteo;
       function getMeteo(){}

      return  meteo;
    }

    meteo.$inject = ['$http','settingService'];
    
    angular.module('daproject')
        .factory('meteo', meteo);
  
})();