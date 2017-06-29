angular.module('documentService', [])
    .service('DocumentService', function ($http) {

    	this.saveDocument = function(data){
    		$http.post('http://localhost:8080/documents', JSON.stringify(data))
    		.success(function(data){
    			console.log("document ajouté");
    		})
    		.error(function(data){
    			console.log("Une erreur s'est produite");
    		});
    	};

    	this.save = function(params){

    		$http({
			method : 'POST',
			url : 'http://localhost:8080/documents',
			data : params,
			headers : {'Content-Type' : 'application/x-www-form-urlencoded',
		              'Access-Control-Allow-Headers': 'accept, content-type',
			          'Access-Control-Allow-Methods': 'POST',
			          'Access-Control-Allow-Origin':' *'}
		})

		.success(function(data){
			console.log("document ajouté");
		})
		.error(function(data){
			console.log("Une erreur s'est produite");
		})

    	};

    	

    });