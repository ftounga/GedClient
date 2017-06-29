angular.module('controllerGroup', ["adminUserService"])
.controller('GroupCtrl', ['$scope','AdminUserService', function($scope, AdminUserService){

	
	$scope.myGroup = AdminUserService.myGroupes;

}]);