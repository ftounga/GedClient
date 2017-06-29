angular.module('cloneDoc', ["viewService"])
.controller('CloneDocCtrl', ['$scope','$window','$routeParams','$location','ViewService', function($scope,$window, $routeParams, $location, ViewService){
	
	$scope.donne = {
		id : $routeParams.dataId,
		nom: $routeParams.dataNom,
		statut: $routeParams.dataStatut,
		owner: $routeParams.dataOwner,
		datecre: $routeParams.dataDateCre,
		datemodif: $routeParams.dataDateModif,
		user_cre: $routeParams.dataUserCre,
		user_modif: $routeParams.dataUserModif
	};

	$scope.save = function(docRequest){
	
		ViewService.myTable.push(docRequest);
		
		$scope.donne = {
			id: null,
			name: null,
			type: null,
			com: null
		};

		$window.location.href = '#/typeMetadonnee';
	}



}]);