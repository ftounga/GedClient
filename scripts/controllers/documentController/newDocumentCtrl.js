angular.module('newDocument', ['viewDossierService'])
.controller('NewDocumentCtrl', ['$scope','ViewDossierService','$window','$http', function($scope,ViewDossierService,$window,$http){

	
	$scope.type_document = ViewDossierService.type_document;

	$scope.data = {};
	
	$scope.save = function(data){
		var data = data;
		data.id = 21;
		data.datecre = new Date();
		data.datemodif = new Date();
		data.user_cre = "User_co";
		data.user_modif = "User_co";
		data.nom = "new document";
		console.log(data);

		$http.post('/documents',JSON.stringify(data))
		.success(function(data){
			$scope.messageAjoutClient = "Nouveau client ajouté";
		})
		.error(function(data){
			$scope.messageAjoutClient = "Une erreur est survenue";
		})

		$window.location.href = '#/document';		
	};


	
	

}]);