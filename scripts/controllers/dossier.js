angular.module('controllerDossier', [])

	

	.controller('Dossier', ['$scope','$http', function($scope,$http,GestionDossierService){

	$scope.aze = "Views";
	$scope.users = []; //declare an empty array
	$http.get("json/mock.json").success(function(response){ 
		$scope.users = response;  //ajax request to fetch data into $scope.data
	});

	
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}

	$scope.user_selected = [];

	$scope.setSelected = function(id){
		if (id.selected ==true){
			$scope.user_selected.push(id.first_name);
			alert($scope.user_selected);
		}else{
			var index = $scope.user_selected.indexOf(id.first_name);
			$scope.user_selected.splice(index,1);
			alert($scope.user_selected);

		}
	}

    }]);
