myApp.controller('ngoDonateController', ['$scope', '$stateParams', 'ngoService', function($scope, $stateParams, ngoService) {
    
    $scope.ngo = ngoService.getNgo($stateParams.id);
    $scope.id = $stateParams.id;
}]);