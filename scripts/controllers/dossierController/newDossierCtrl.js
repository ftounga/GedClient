angular.module('newDossier', ['viewDossierService'])
.controller('NewDossierCtrl', ['$scope','ViewDossierService','$window','$http', function($scope,ViewDossierService,$window,$http){

	$scope.type_dossier = ViewDossierService.type_dossier;

	$scope.data = {};
	
	$scope.save = function(data){
		var data = data;
		data.id = 21;
		data.datecre = new Date();
		data.datemodif = new Date();
		data.user_cre = "User_co";
		data.user_modif = "User_co";
		console.log(data);
		$window.location.href = '#/dossier';		
	};

	
	

}]);