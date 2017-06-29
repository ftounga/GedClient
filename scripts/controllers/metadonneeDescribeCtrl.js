angular.module('controllerMetadonneeDescribe', ["viewService"])
.controller('MetadonneeDescribeCtrl', ['$scope','ViewService','$location', function($scope, ViewService,$location){

	$scope.datas = [ {id: 1, nom:'unNom', type:'false', defaut: 'rien'},
	                 {id: 2, nom:'unAutreNom', type:'true', defaut:'rien'}
	               ];
	$scope.init = function(myData){	
		$scope.data = datas[parseInt(maData)];
	};

	$scope.data =  {
		id : null,
		nom: null,
		type: null,
		defaut: null
	};

	$scope.donne = ViewService.propertie;

	$scope.goToUrl = function(){
		console.log("tootoo");
	    $location.replace('#/titre2');
	};
}]);