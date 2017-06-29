angular.module('controllerEdit', ["viewService"])
.controller('EditCtrl', ['$scope','$window','$routeParams','$location','ViewService', function($scope,$window, $routeParams, $location, ViewService){
	
	$scope.donne = {
		id : $routeParams.dataId,
		name: $routeParams.dataName,
		type: $routeParams.dataType
	};

	$scope.save = function(docRequest){
	
		ViewService.myTable.push(docRequest);
		ViewService.myTable = ViewService.removeElement(ViewService.myTable, docRequest);
		
		$scope.donne = {
			id: null,
			name: null,
			type: null,
			com: null
		};

		$window.location.href = '#/typeMetadonnee';
	}

}]);