(function() {
    'use strict';
  
    function cocktailSearch($http,searchConfig) {
      var cocktailSearch = {};
     cocktailSearch.cocktailList = [];
     cocktailSearch.searchConfig = searchConfig;
      cocktailSearch.getCocktails= getCocktails;
      
       function getCocktails(){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+cocktailSearch.searchConfig.ingredient)
            .then(function(response){
                console.log('Success: %o', response);
                 
                 cocktailSearch.cocktailList = response.drinks;
            })
            .catch(function(error){
                 cocktailSearch.cocktailList = [];
                 console.log('Error: %o', error);
                 
            });
            return    cocktailSearch;
       }

      return  cocktailSearch;
    }

   cocktailSearch.$inject = ['$http','searchConfig'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();