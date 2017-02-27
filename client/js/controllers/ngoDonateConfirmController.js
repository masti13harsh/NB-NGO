myApp.controller('ngoDonateConfirmController', ['$scope', '$stateParams', 'ngoService', function($scope, $stateParams, ngoService) {
    
    $scope.ngo = ngoService.getNgo($stateParams.id);
    $scope.ngo.fulfilledQuantityPercentage += $scope.ngo.donorQuantity
}]);