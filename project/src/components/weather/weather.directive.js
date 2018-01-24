(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('weather', function() {
      return {
        templateUrl: 'src/components/weather/weather.html',
        restrict: 'E',
        bindToController: {
         meteoElement: '=',
          
        },
        controller: 'WeCtrl',
        controllerAs: 'weather'
      };
    });

})();