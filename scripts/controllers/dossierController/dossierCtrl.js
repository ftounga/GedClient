angular.module('controllerDossier', ["viewDossierService","ui.bootstrap","dataDossierService"])
.controller('DossierCtrl', ['$scope','$http','ViewDossierService','$uibModal','$log','$window','$q','DataDossierService', function($scope,$http,ViewDossierService,$uibModal,$log,$window,$q,DataDossierService){


    
    $scope.users = []; 
    $scope.users = DataDossierService.users; //declare an empty array
    console.log($scope.users);
    $scope.users_init = DataDossierService.users_init; //declare an empty array
    $scope.users_banque = DataDossierService.users_banque; //declare an empty array
    $scope.users_assurance = DataDossierService.users_assurance; //declare an empty array
    $scope.user_selected = DataDossierService.user_selected;

    $scope.getData = function(data){
        
        
        
        if (data === undefined || data === null) {

            $http.get("json/dossier/doc.json").success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
            
         }else{

            $http.get(data).success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
         }
         
    };

    $scope.getData_2 = function(data){
        if (data == "json/dossier/doc.json"){
            $scope.users = $scope.users_init;
        }
        if (data == "json/dossier/doc_banque.json"){
            $scope.users = $scope.users_banque;
        }
        if (data == "json/dossier/doc_assurance.json"){
            $scope.users = $scope.users_assurance;
        }
    }

    $scope.clique = function(data){
        $scope.user_selected = [];
       // $scope.getData(data);
        $scope.getData_2(data);
    };  
    

    $scope.myDatas = [
            { filterName: 'filtre 0', request : 'json/dossier/doc.json'},
            { filterName: 'filtre 1', request : 'json/dossier/doc_banque.json'},
            { filterName: 'filtre 2', request : 'json/dossier/doc_assurance.json' }       
        ];
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }


    $scope.setSelected = function(id){
        if (id.selected ==true){
            var index = $scope.users.indexOf(id);

            $scope.user_selected.push(index);
            alert($scope.user_selected);
        }else{
            var index = $scope.user_selected.indexOf(id);
            $scope.user_selected.splice(index,1);
            
            alert($scope.user_selected);

        }
    }




    $scope.setSelected_2 = function(elmt){
        if (elmt.selected == true){
            var index = $scope.users.indexOf(elmt.id);
            $scope.users.splice(index,1);   
        }else{
            $scope.users.splice(elmt.id,O,elmt);
        }
    }

    
    $scope.deleted = function(){
        var j = $scope.user_selected.length;
        for(var i=0; i<j; i++){
            $scope.users.splice($scope.user_selected[i],1);
        }

        $scope.user_selected = [];
    }

    $scope.viewData = function(data){
        ViewDossierService.user = data;
    }

    $scope.type_dossier ;
    $scope.tabs = [{id:"type_dossier1"},{id:"type_dossier2"},{id:"type_dossier3"},{id:"type_dossier4"}];
    
    $scope.show = function() {
        var uibModalInstance = $uibModal.open({
        templateUrl : 'scripts/views/dossierViews/modalNouveauDossier.html',
        controller: 'modatCtrl',
        resolve: {
            tabs: function () {
                return $scope.tabs;
            }
        }
        });
        var echec = $q.reject();
        var instance = uibModalInstance.result.then(function (response) {
            ViewDossierService.type_dossier = response;
        }, function () {
             $log.info('modal-component dismissed at: ' + new Date());
             return echec;
        });

        instance.then(function () {
             $window.location.href = '#/newDossier';
        }, function () {
             $log.info('redirecto doesnt work: ' + new Date());
        });
    };


 }])
.controller('modatCtrl', ['$scope','$uibModalInstance','tabs', function($scope,$uibModalInstance,tabs){
   
    $scope.type_doc;
    $scope.tabs = tabs;
    $scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.pass = function(){
        $scope.type_doc = $scope.data.id;
        $uibModalInstance.close($scope.type_doc);
    }
}]);


