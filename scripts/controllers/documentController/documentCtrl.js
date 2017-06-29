angular.module('controllerDocument', ["viewDossierService","ui.bootstrap"])
.controller('DocumentCtrl', ['$scope','$http','ViewDossierService','$uibModal','$window','$log','$q', function($scope,$http,ViewDossierService,$uibModal,$window,$log, $q){

    $scope.id = 1;
    $scope.users = []; //declare an empty array
    $scope.users_init = []; //declare an empty array
    $scope.users_banque = []; //declare an empty array
    $scope.users_assurance = []; //declare an empty array
    $scope.user_selected = [];
    $scope.url_init = "json/document/document1.json";
    $http.get("json/document/document1.json").success(function(response){ 
        $scope.users = response;  //ajax request to fetch data into $scope.data
        $scope.users_init = response;
    });
    //à retirer si BD
    $http.get("json/document/document2.json").success(function(response){ 
        $scope.users_banque = response;  //ajax request to fetch data into $scope.data
    });
    //à retirer si BD
    $http.get("json/document/document3.json").success(function(response){ 
        $scope.users_assurance = response;  //ajax request to fetch data into $scope.data
    });

    $scope.getData = function(data){
        
        
        
        if (data === undefined || data === null) {

            $http.get("json/document/document1.json").success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
            
         }else{

            $http.get(data).success(function(response){ 
            $scope.users = response;  //ajax request to fetch data into $scope.data
            });
         }
         
    };

    $scope.getData_2 = function(data){
        if (data == "json/document/document1.json"){
            $scope.users = $scope.users_init;
        }
        if (data == "json/document/document2.json"){
            $scope.users = $scope.users_banque;
        }
        if (data == "json/document/document3.json"){
            $scope.users = $scope.users_assurance;
        }
    }

    $scope.clique = function(data){
        $scope.user_selected = [];
       // $scope.getData(data);
        $scope.getData_2(data);
    };  
    

    $scope.myDatas = [
            { filterName: 'filtre 0', request : 'json/document/document1.json'},
            { filterName: 'filtre 1', request : 'json/document/document2.json'},
            { filterName: 'filtre 2', request : 'json/document/document3.json' }       
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
    $scope.tabs = [{id:"type_document1"},{id:"type_document2"},{id:"type_document3"},{id:"type_document4"}];
    $scope.type_document;

    $scope.show = function() {
        var uibModalInstance = $uibModal.open({
        templateUrl : 'scripts/views/documentViews/modalNouveauDocument.html',
        controller: 'modalCtrl',
        resolve: {
            tabs: function () {
                return $scope.tabs;
            }
        }
        });

        var echec = $q.reject();
        uibModalInstance.result.then(function (response) {
            ViewDossierService.type_document = response;
        }, function () {
             $log.info('modal-component dismissed at: ' + new Date());
             return echec;
         }).then(function (response) {
             $window.location.href = '#/newDocument';
        }, function () {
             $log.info('redirecto doesnt work: ' + new Date());
         });
    };


 }])
.controller('modalCtrl', ['$scope','$uibModalInstance','tabs', function($scope,$uibModalInstance,tabs){
   
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


