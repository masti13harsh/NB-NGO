myApp.controller('ngoDonateConfirmController', ['$scope', '$stateParams', 'ngoService', function($scope, $stateParams, ngoService) {
    
    $scope.ngo = ngoService.getNgo($stateParams.id);
    $scope.ngo.items.fulfilledQuantityPercentage += $scope.ngo.items.donorQuantity;

    $scope.percentage = function (fulfilledQuantity, donorQuantity) {
        debugger
        return ((fulfilledQuantity+donorQuantity)/100)*100;
    }
}]);