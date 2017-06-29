angular.module('selectModule', ["ui.bootstrap"])
.controller('ModalSelectDocCtrl', ['$scope','$uibModalInstance', function($scope,$uibModalInstance){
	$scope.close = function(){
        $uibModalInstance.dismiss('cancel');
    }
    $scope.send = function(){
        $uibModalInstance.close(data);
    }
	
}]);