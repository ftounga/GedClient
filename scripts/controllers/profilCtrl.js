angular.module('controllerProfil', ["adminUserService"])
.controller('ProfilCtrl', ['$scope','AdminUserService', function($scope, AdminUserService){

	
	$scope.myProfil = AdminUserService.myProfils;

}]);