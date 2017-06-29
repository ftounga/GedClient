angular.module('newTypeDocument', ['viewService'])
.controller('NewTypeDocumentCtrl', ['$scope','ViewService','$http','$window', function($scope,ViewService,$http,$window){

$scope.typeMetas = ViewService.typeMetas
$scope.typeMetadonnee = {};

$scope.vueIf = false;

$scope.vue = function(){
	$scope.vueIf = true;
};

$scope.typeDocumentTypeMetadonnees = [];
$scope.idsTab = [];
$scope.ajouter = function(elt,mtd){

	if (elt.isObligatoire == null){
		elt.isObligatoire = true;
	}
	if (elt.isObligatoire == "Oui"){
		elt.isObligatoire = true;
	}
	if (elt.isObligatoire == "Non"){
		elt.isObligatoire = false;
	}
	
	mtd.date_creation = new Date();
	mtd.date_last_modification = new Date();
	elt.typeMetadonnee=mtd;

	function seuil(element) {
  		return element == mtd.id;
	}
	var test = $scope.idsTab.find(seuil)
	console.log(test);
	if (test){
		alert('Métadonnée déjà existante');
	}else{
		$scope.idsTab.push(mtd.id);
		$scope.typeDocumentTypeMetadonnees.push(elt);
		$scope.vueIf = false;
	}
	console.log($scope.idsTab);
	
	$scope.typeDocumentTypeMetadonnee ={
            isObligatoire:true,
            regex:null,
            defaultValue:null,
            typeMetadonnee:null
    };

};

$scope.typeDocumentTypeMetadonnee = {
            isObligatoire:null,
            regex:null,
            defaultValue:null,
            typeMetadonnee:null
    };

$scope.typeDocument = {
        nom:null,
        date_creation:new Date(),
        date_last_modification: new Date(),
        typeDocumentTypeMetadonnees:$scope.typeDocumentTypeMetadonnees
    };

$scope.save = function(nom){
	var data = $scope.typeDocument;
	$scope.typeDocument.nom = nom;
	console.log($scope.typeDocument.nom);
	console.log(data);
	$http.post("/typeDocuments/", JSON.stringify(data) )
            .success(function(response){ 
                console.log(response);
             })
            .error(function(response){
                console.log(response.message);
    });
    $window.location.href = '#/typeDocument';
}

}]);