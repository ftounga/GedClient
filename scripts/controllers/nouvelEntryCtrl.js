angular.module('nouvelEntry', ["viewService", "documentService"])
.controller('NouvelEntryCtrl', ['$scope','$window','ViewService','DocumentService', function($scope, $window, ViewService, DocumentService){

	$scope.documents = [];
	$scope.doc = {};
	

	$scope.save = function(docRequest){
		$scope.documents.push(docRequest);
		ViewService.myTable.push(docRequest);
		var maData = {};
		maData.nom = docRequest.name;
		DocumentService.saveDocument(maData);
		
		$scope.doc = {
			id: null,
			name: null,
			type: null,
			com: null
		};

		$window.location.href = '#/typeMetadonnee';
	}

}]);