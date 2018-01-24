(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('weatherDir', function() {
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