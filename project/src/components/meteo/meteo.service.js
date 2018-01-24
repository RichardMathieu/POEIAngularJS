(function() {
    'use strict';
  
    function meteo($http, settingService) {
      var meteo = {};
      meteo.meteoListe = [];
      meteo.getMeteo = getMeteo;
      meteo.settingService=settingService;
       function getMeteo(){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ meteo.settingService.city+'&APPID=4fcb3a91904bd04021870ca8464a60d8&units=metric')
            .then(function(response){
                meteo.meteoListe = response;
            })
            .catch(function(error){
                meteo.meteoListe = [];
            });
       }

      return  meteo;
    }

    meteo.$inject = ['$http','settingService'];
    
    angular.module('daproject')
        .factory('meteo', meteo);
  
})();