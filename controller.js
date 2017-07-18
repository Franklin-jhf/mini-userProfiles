angular.module('userProfiles').controller('MainController', function($scope, mainSrvc){
    
    $scope.thisAppIsBroken = "This angular app is working";

    $scope.users = mainSrvc.getUsers();
   
    $scope.toggleFavorite = mainSrvc.toggleFavorite;
})