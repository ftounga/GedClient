angular.module('viewDossier', ["viewDossierService"])
.controller('ViewDossierCtrl', ['$scope','ViewDossierService','$http', function($scope,ViewDossierService,$http){

	
	$scope.user = ViewDossierService.user;
	$scope.docs = [
		{id:1, lien:"pdf/1.pdf", nom:"document1"},
		{id:1, lien:"pdf/2.pdf", nom:"document2"},
		{id:1, lien:"pdf/3.pdf", nom:"document3"},
		{id:1, lien:"pdf/4.pdf", nom:"document4"},
		{id:1, lien:"pdf/5.pdf", nom:"document5"}

	];

	$scope.obj = {};
	$scope.transfert = function(data){
		$scope.obj.lien = data;
	}

	$scope.messageAjoutClient = null;

	$scope.save = function(){
		var data = {id:2, nom:"document2"};
		$http.post('/documents',JSON.stringify(data))
		.success(function(data){
			$scope.messageAjoutClient = "Nouveau client ajouté";
		})
		.error(function(data){
			$scope.messageAjoutClient = "Une erreur est survenue";
		})

	};

}])
.controller('ViewDocumentCtrl', ['$scope','ViewDossierService', function($scope,ViewDossierService){

	
	$scope.user = ViewDossierService.user;
	$scope.docs = [
		{id:1, lien:"pdf/1.pdf", nom:"dossier1"},
		{id:1, lien:"pdf/2.pdf", nom:"dossier2"},
		{id:1, lien:"pdf/3.pdf", nom:"dossier3"},
		{id:1, lien:"pdf/4.pdf", nom:"dossier4"},
		{id:1, lien:"pdf/5.pdf", nom:"dossier5"}

	];

	$scope.obj = {};
	$scope.transfert = function(data){
		$scope.obj.lien = data;
	}

}]);