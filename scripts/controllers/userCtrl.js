angular.module('controllerUser', ["adminUserService"])
.controller('UserCtrl', ['$scope','AdminUserService', function($scope, AdminUserService){

	
	$scope.myUser = AdminUserService.myUsers;

}]);