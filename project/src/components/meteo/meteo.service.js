(function() {
    'use strict';
  
    function meteo($http, settingService) {
      var meteo = {};
      meteo.meteoListe = [];
      meteo.getMeteo = getMeteo;
      meteo.settingService=settingService;
      meteo.isSuccess = false;
       function getMeteo(){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ meteo.settingService.city+'&APPID=4fcb3a91904bd04021870ca8464a60d8&units=metric')
            .then(function(response){
                console.log('Success: %o', response);
                 meteo.isSuccess = true;
                meteo.meteoListe = response.data.list;
            })
            .catch(function(error){
                meteo.meteoListe = [];
                 console.log('Error: %o', error);
                  meteo.isSuccess = false;
            });
            return  meteo.meteoListe;
       }

      return  meteo;
    }

    meteo.$inject = ['$http','settingService'];
    
    angular.module('daproject')
        .factory('meteo', meteo);
  
})();