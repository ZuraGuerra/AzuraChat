'use strict';
 
angular.module('myApp.home', ['ngRoute','firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {

	var firebaseObj = new Firebase("https://sweltering-torch-6229.firebaseio.com");
	var loginObj = $firebaseSimpleLogin(firebaseObj);
 	
 	$scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            alert('Authentication successful');
        }, function(error) {
            // Failure callback
            alert('Authentication failure');
        });
	}
}]);