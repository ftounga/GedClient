angular.module('viewModule', ["viewDossierService"])
.controller('ViewTypeDossierCtrl',['$scope','ViewDossierService','$http', function($scope,ViewDossierService,$http){
	$scope.user = ViewDossierService.user;
	$scope.listTypeM = $scope.user.typeDossierTypeMetadonnees;
	$scope.listTypeDocDos = $scope.user.typeDossierTypeDocuments;
	
	$scope.resultMeta = [];
	$scope.resultDoc = [];
	
/*  ++++++++++++++++++++++++++++++++ métadonnée +++++++++++++++++++++++++++++++++++++++++*/	
	
	$scope.typeDossierTypeMetadonnee = {};		
	$scope.metadonnee = {};
	
	/* Utilisation d'une IIFE*/
	
	$scope.getMeta = function(id){
		
		(function() {
			
			var data = {};
			$http.get("typeDossierTypeMetadonnees/"+id)
		    .success(function(response){ 
		    	$scope.typeDossierTypeMetadonnee = response;
		    	$scope.metadonnee = response.typeMetadonnee;
		    	console.log($scope.metadonnee);
		    	data.id = $scope.typeDossierTypeMetadonnee.id;
		   		data.isObligatoire = $scope.typeDossierTypeMetadonnee.isObligatoire;
		   		data.regex = $scope.typeDossierTypeMetadonnee.regex;
		   		data.defaultValue = $scope.typeDossierTypeMetadonnee.defaultValue;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeMetadonnees/"+$scope.metadonnee)
				.success(function(response){
					    console.log(response);
						$scope.metadonnee = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.metadonnee.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement de la metadonnée");
			}).then(function(){
				console.log(data);
				$scope.resultMeta.push(data);
				
			},function(raison){
				console.log("erreur affichage metadonnée");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeM.length; i++) {	
		  $scope.getMeta($scope.listTypeM[i]);	
	}
	
/*  ++++++++++++++++++++++++++++++++ Documents +++++++++++++++++++++++++++++++++++++++++*/
	
	$scope.typeDossierTypeDocument = {};
	$scope.document = {}
	
	
$scope.getDoc = function(id){
			
		(function() {
			
			var data = {};
			$http.get("typeDossierTypeDocuments/"+id)
		    .success(function(response){ 
		    	$scope.typeDossierTypeDocument = response;
		    	$scope.document = response.typeDocument;
		    	console.log($scope.document);
		    	data.id = $scope.typeDossierTypeDocument.id;
		   		data.isObligatoire = $scope.typeDossierTypeDocument.isObligatoire;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeDocuments/"+$scope.document)
				.success(function(response){
					    console.log(response);
						$scope.document = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.document.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement du dossier");
			}).then(function(){
				console.log(data);
				$scope.resultDoc.push(data);
				
			},function(raison){
				console.log("erreur affichage dossiers");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeDocDos.length; i++) {	
		  $scope.getDoc($scope.listTypeDocDos[i]);	
	}
	
	
}])
.controller('ViewTypeDocumentCtrl',['$scope','$http','ViewDossierService', function($scope,$http,ViewDossierService){
	$scope.user = ViewDossierService.user;
	$scope.listTypeM = $scope.user.typeDocumentTypeMetadonnees;
	$scope.listTypeDossiers = $scope.user.typeDossierTypeDocuments;
	console.log($scope.listTypeM);
	$scope.resultMeta = [];
	$scope.resultDos = [];
/*  ++++++++++++++++++++++++++++++++ métadonnée +++++++++++++++++++++++++++++++++++++++++*/	
	
	$scope.typeDocumentTypeMetadonnee = {};		
	$scope.metadonnee = {};
	
	/* Utilisation d'une IIFE*/
	
	$scope.getMeta = function(id){
		
		(function() {
			
			var data = {};
			$http.get("typeDocumentTypeMetadonnees/"+id)
		    .success(function(response){ 
		    	$scope.typeDocumentTypeMetadonnee = response;
		    	$scope.metadonnee = response.typeMetadonnee;
		    	console.log($scope.metadonnee);
		    	data.id = $scope.typeDocumentTypeMetadonnee.id;
		   		data.isObligatoire = $scope.typeDocumentTypeMetadonnee.isObligatoire;
		   		data.regex = $scope.typeDocumentTypeMetadonnee.regex;
		   		data.defaultValue = $scope.typeDocumentTypeMetadonnee.defaultValue;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeMetadonnees/"+$scope.metadonnee)
				.success(function(response){
					    console.log(response);
						$scope.metadonnee = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.metadonnee.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement de la metadonnée");
			}).then(function(){
				console.log(data);
				$scope.resultMeta.push(data);
				
			},function(raison){
				console.log("erreur affichage metadonnée");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeM.length; i++) {	
		  $scope.getMeta($scope.listTypeM[i]);	
	}
	
	/*  ++++++++++++++++++++++++++++++++ Dossiers +++++++++++++++++++++++++++++++++++++++++*/
	
	$scope.typeDossierTypeDocument = {};
	$scope.dossier = {}
	
	
$scope.getDos = function(id){
			
		(function() {
			
			var data = {};
			$http.get("typeDossierTypeDocuments/"+id)
		    .success(function(response){ 
		    	$scope.typeDossierTypeDocument = response;
		    	$scope.dossier = response.typeDossier;
		    	console.log($scope.dossier);
		    	data.id = $scope.typeDossierTypeDocument.id;
		   		data.isObligatoire = $scope.typeDossierTypeDocument.isObligatoire;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeDossiers/"+$scope.dossier)
				.success(function(response){
					    console.log(response);
						$scope.dossier = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.dossier.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement du dossier");
			}).then(function(){
				console.log(data);
				$scope.resultDos.push(data);
				
			},function(raison){
				console.log("erreur affichage dossiers");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeDossiers.length; i++) {	
		  $scope.getDos($scope.listTypeDossiers[i]);	
	}
	
	
}])
.controller('ViewTypeMetadonneeCtrl',['$scope','ViewDossierService','$http', function($scope,ViewDossierService,$http){
	$scope.user = ViewDossierService.user;
	$scope.listTypeDoc = $scope.user.typeDocumentTypeMetadonnees;
	$scope.listTypeDossiers = $scope.user.typeDossierTypeMetadonnees;
	
	$scope.resultDoc = [];
	$scope.resultDos = [];
	
/*  ++++++++++++++++++++++++++++++++ Dossiers +++++++++++++++++++++++++++++++++++++++++*/
	
	$scope.typeDossierTypeMetadonnee = {};
	$scope.dossier = {}
	
	
$scope.getDos = function(id){
			
		(function() {
			
			var data = {};
			$http.get("typeDossierTypeMetadonnees/"+id)
		    .success(function(response){ 
		    	$scope.typeDossierTypeMetadonnee = response;
		    	$scope.dossier = response.typeDossier;
		    	console.log($scope.dossier);
		    	data.id = $scope.typeDossierTypeMetadonnee.id;
		   		data.isObligatoire = $scope.typeDossierTypeMetadonnee.isObligatoire;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeDossiers/"+$scope.dossier)
				.success(function(response){
					    console.log(response);
						$scope.dossier = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.dossier.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement du dossier");
			}).then(function(){
				console.log(data);
				$scope.resultDos.push(data);
				
			},function(raison){
				console.log("erreur affichage dossiers");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeDossiers.length; i++) {	
		  $scope.getDos($scope.listTypeDossiers[i]);	
	}
	
/*  ++++++++++++++++++++++++++++++++ Documents +++++++++++++++++++++++++++++++++++++++++*/
	
	$scope.typeDocumentTypeMetadonnee = {};
	$scope.document = {}
	
	
$scope.getDoc = function(id){
			
		(function() {
			
			var data = {};
			$http.get("typeDocumentTypeMetadonnees/"+id)
		    .success(function(response){ 
		    	$scope.typeDocumentTypeMetadonnee = response;
		    	$scope.document = response.typeDocument;
		    	console.log($scope.document);
		    	data.id = $scope.typeDocumentTypeMetadonnee.id;
		   		data.isObligatoire = $scope.typeDocumentTypeMetadonnee.isObligatoire;
	        })
	       .error(function(response){
	           console.log("erreur");
	       }).then(function() {
	    	   $http.get("typeDocuments/"+$scope.document)
				.success(function(response){
					    console.log(response);
						$scope.document = response;  //ajax request to fetch data into $scope.data
						data.nom = $scope.document.nom
				 }).error(function(response){
			         console.log("erreur");
			     });
			
		     }, function(raison) {
				console.log("erreur chargement du dossier");
			}).then(function(){
				console.log(data);
				$scope.resultDoc.push(data);
				
			},function(raison){
				console.log("erreur affichage dossiers");
			});
			
		})();	
	}
	
	for (var i = 0; i < $scope.listTypeDoc.length; i++) {	
		  $scope.getDoc($scope.listTypeDoc[i]);	
	}
	
}]);