angular.module('dataDossierService', [])
    .service('DataDossierService', function ($http) {

    var self = this;

    this.users;
    this.users_init
    this.users_banque;
    this.users_assurance;

    $http.get("json/dossier/doc.json").success(function(response){ 
        self.users = response;  //ajax request to fetch data into $scope.data
        self.users_init = response;
        console.log(self.users + 'toto');
    });
    //à retirer si BD
    $http.get("json/dossier/doc_banque.json").success(function(response){ 
        self.users_banque = response;  //ajax request to fetch data into $scope.data
    });
    //à retirer si BD
    $http.get("json/dossier/doc_assurance.json").success(function(response){ 
        self.users_assurance = response;  //ajax request to fetch data into $scope.data
    });

    });