(function() {
    'use strict';
  
    function cocktailSearch($http,searchConfig) {
      var cocktailSearch = {};
     cocktailSearch.cocktailList = [];
     cocktailSearch.searchConfig = searchConfig;
      cocktailSearch.getCocktails= getCocktails;
      cocktailSearch.cocktailDetail = [];
      cocktailSearch.getCocktailsDetails= getCocktailsDetails;
      
       function getCocktails(){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+cocktailSearch.searchConfig.ingredient)
            .then(function(response){
                console.log('Success: %o', response);
                
                 cocktailSearch.cocktailList = response.data.drinks;
                 
            })
            .catch(function(error){
                 cocktailSearch.cocktailList = [];
                 console.log('Error: %o', error);
                 
            });
            return    cocktailSearch.cocktailList;
       }

       function getCocktailsDetails(cocktailId){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
            .then(function(response){
                console.log('Success: %o', response);
                
                  cocktailSearch.cocktailDetail = response.drinks[0];
                 
            })
            .catch(function(error){
                  cocktailSearch.cocktailDetail = {};
                 console.log('Error: %o', error);
                 
            });
            return     cocktailSearch.cocktailDetail;
       }

      return  cocktailSearch;
    }

   cocktailSearch.$inject = ['$http','searchConfig'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();