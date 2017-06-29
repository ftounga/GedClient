angular.module('clone', ["viewService"])
.controller('CloneCtrl', ['$scope','$window','$routeParams','$location','ViewService', function($scope,$window, $routeParams, $location, ViewService){
	
	$scope.donne = {
		id : $routeParams.dataId,
		nom: $routeParams.dataName,
		type: $routeParams.dataType
	};

	$scope.save = function(docRequest){
	
		ViewService.myTable.push(docRequest);
		
		$scope.donne = {
			id: null,
			nom: null,
			type: null,
			
		};

		$window.location.href = '#/typeMetadonnee';
	}



}]);