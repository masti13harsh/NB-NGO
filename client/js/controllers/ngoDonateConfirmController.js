myApp.controller('ngoDonateConfirmController', ['$scope', '$stateParams', 'ngoService', function($scope, $stateParams, ngoService) {
    
    $scope.ngo = ngoService.getNgo($stateParams.id);
    $scope.ngo.items.fulfilledQuantityPercentage += $scope.ngo.items.donorQuantity;

    $scope.percentage = function (fulfilledQuantity, donorQuantity, requiredQuantity) {
        console.log("fulfilledQuantity--" + fulfilledQuantity + "  donorQuantity--" + donorQuantity);

        return (((parseFloat(fulfilledQuantity)+parseFloat(donorQuantity))/parseFloat(requiredQuantity))*100);
    }
}]);