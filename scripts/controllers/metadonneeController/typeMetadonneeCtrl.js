angular.module('controllerMetadonnee', ["viewService","viewDossierService","ui.bootstrap"])
.controller('TypeMetadonneeCtrl', ['$scope','ViewService','$http','ViewDossierService','$uibModal','$log','$window','$q','$route', function($scope, ViewService,$http,ViewDossierService,$uibModal,$log,$window,$q,$route){
    $scope.id = 1;
    $scope.users = []; //declare an empty array
    $scope.users_init = []; //declare an empty array
    $scope.users_banque = []; //declare an empty array
    $scope.users_assurance = []; //declare an empty array
    $scope.user_selected = [];
    $scope.url_init = "json/metadonnee/type_metadonnee1.json";
    $http.get("/typeMetadonnees")
        .success(function(response){ 
            $scope.users = response;
            })  
        .error(function(response){
            console.log("erreur");
        });
    //à retirer si BD
    $http.get("json/metadonnee/type_metadonnee2.json").success(function(response){ 
        $scope.users_banque = response;  //ajax request to fetch data into $scope.data
    });
    //à retirer si BD
    $http.get("json/metadonnee/type_metadonnee3.json").success(function(response){ 
        $scope.users_assurance = response;  //ajax request to fetch data into $scope.data
    });

    $scope.getData = function(data){
        
        if (data === undefined || data === null) {

            $http.get("json/metadonnee/type_metadonnee1.json").success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
            
         }else{

            $http.get(data).success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
         }
         
    };

    $scope.getData_2 = function(data){
        if (data == "json/metadonnee/type_metadonnee1.json"){
            $scope.users = $scope.users_init;
        }
        if (data == "json/metadonnee/type_metadonnee2.json"){
            $scope.users = $scope.users_banque;
        }
        if (data == "json/metadonnee/type_metadonnee3.json"){
            $scope.users = $scope.users_assurance;
        }
    }

    $scope.myDatas = [
            { filterName: 'filtre 0', request : 'json/metadonnee/type_metadonnee1.json'},
            { filterName: 'filtre 1', request : 'json/metadonnee/type_metadonnee2.json'},
            { filterName: 'filtre 2', request : 'json/metadonnee/type_metadonnee3.json' }       
        ];
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }


    $scope.viewData = function(data){
        ViewDossierService.user = data;
        console.log(data);
    }
    
    $scope.typeDocs = [];
    $http.get("/typeDocuments")
    .success(function(response){ 
        $scope.typeDocs = response;
        })  
    .error(function(response){
        console.log("erreur++");
    });
    
    $scope.typeDos = [];
    $http.get("/typeDossiers")
    .success(function(response){ 
        $scope.typeDos = response;
        })  
    .error(function(response){
        console.log("erreur++");
    });

    $scope.new_data = function(){
    	ViewService.typeDocs = $scope.typeDocs;
    	ViewService.typeDos = $scope.typeDos;
        $window.location.href = '#/newTypeMetadonnee';
    }

    $scope.edit_data = function(type){
        var myData = type;
        var uibModalInstance = $uibModal.open({
        templateUrl : 'scripts/views/metadonneeViews/modalTypeMetadonneeEdit.html',
        controller: 'modalEditCtrl',
        resolve: {
            data: function () {
                return myData;
            }
        },
        size:'sm'
        });
        var instance = uibModalInstance.result.then(function (response) {
            var data = response;
            var param = "nom="+data.nom+"&type="+data.type+"&id="+data.id;
            var config = {
                headers:{'Content-Type' : 'application/x-www-form-urlencoded'}
            };
            $http.put("/typeMetadonnees/", param, config)
            console.log(param);
        }, function () {
             $log.info('modal-component dismissed at: ' + new Date());
             return $q.reject();
        });

        instance.then(function(){
            $http.get("/typeMetadonnees")
            .success(function(response){ 
                $scope.users = response;
                $route.reload();
             })
            .error(function(response){
                console.log("erreur");
            });
        }, function(){
            console.log("erreur");
        });
    }

    $scope.delete_data = function(type){
        var myData = type;
        var uibModalInstance = $uibModal.open({
        templateUrl : 'scripts/views/metadonneeViews/modalTypeMetadonneeDelete.html',
        controller: 'modalDeleteCtrl',
        resolve: {
            data: function () {
                return myData;
            }
        },
        size:'sm'
        });
        var instance = uibModalInstance.result.then(function (response) {
            var data = response;
            var config = {
                data: data,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                 }
            }
            $http.delete("/typeMetadonnees/", config);
            
        }, function () {
             $log.info('modal-component dismissed at: ' + new Date());
             return $q.reject();
        });

        instance.then(function(){
            alert ("donnée supprimée");
            $http.get("/typeMetadonnees")
            .success(function(response){ 
                $scope.users = response;
             })
            .error(function(response){
                console.log("erreur");
            });
        }, function(){
            console.log("erreur");
        });

    }

    $scope.arr = [];
    $scope.setSelected = function(id, isTrue){
        console.log(id.id);
        console.log(isTrue);
        console.log($scope.isChecked);
        if (isTrue) 
            $scope.arr.push(id);    
        else {
            var index = $scope.arr.indexOf(id);
            $scope.arr.splice(index, 1);
            }

        console.log($scope.arr);
    }

    $scope.delete_selected_data = function(){
        var myData = $scope.arr;
        var taille = myData.length;
        var uibModalInstance = $uibModal.open({
        templateUrl : 'scripts/views/metadonneeViews/modalTypeMetadonneeDeleteSelected.html',
        controller: 'modalDelSelCtrl',
        resolve: {
            data: function () {
                return myData;
            }
        }
        });
        var instance = uibModalInstance.result.then(function (response) {
            var data = response;
            var config = {
                data: data,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                 }
            }
            $http.delete("/typeMetadonnees/all", config);
            
        }, function () {
             $log.info('modal-component dismissed at: ' + new Date());
             return $q.reject();
        });

        instance.then(function(){
            alert(taille + "données supprimées");
            $http.get("/typeMetadonnees")
            .success(function(response){ 
                $scope.users = response;
             })
            .error(function(response){
                console.log("erreur");
            });
        }, function(){
            console.log("erreur");
        });


    }

}])
.controller('modalNewCtrl', ['$scope','$uibModalInstance', function($scope,$uibModalInstance){

    $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.send = function(){
        $uibModalInstance.close($scope.nom);
    }
   
}])
.controller('modalEditCtrl', ['$scope','$uibModalInstance','data', function($scope,$uibModalInstance,data){
   
   $scope.data = data;
   $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.send = function(){
        $uibModalInstance.close($scope.data);
    }
}])
.controller('modalDeleteCtrl', ['$scope','$uibModalInstance','data', function($scope,$uibModalInstance,data){
   
   $scope.data = data;
   $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.send = function(){
        $uibModalInstance.close($scope.data);
    }
}])
.controller('modalDelSelCtrl', ['$scope','$uibModalInstance','data', function($scope,$uibModalInstance, data){
   
    var data = data;
    $scope.l = "toto";
   $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.send = function(){
        $uibModalInstance.close(data);
    }
}]);

