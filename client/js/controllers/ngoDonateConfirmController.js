myApp.controller('ngoDonateConfirmController', ['$scope', '$stateParams', 'ngoService', function($scope, $stateParams, ngoService) {
    
    $scope.ngo = ngoService.getNgo($stateParams.id);
    $scope.ngo.items.fulfilledQuantityPercentage += $scope.ngo.items.donorQuantity;

    $scope.percentage = function (fulfilledQuantity, donorQuantity, requiredQuantity) {
        console.log("fulfilledQuantity--" + fulfilledQuantity + "  donorQuantity--" + donorQuantity);
        var percentageCalc = (((parseFloat(fulfilledQuantity)+parseFloat(donorQuantity))/parseFloat(requiredQuantity))*100);
        return Math.floor(percentageCalc).toFixed(2);
    }
}]);