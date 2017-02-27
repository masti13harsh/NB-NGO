myApp.controller('ngosController', ['$scope', 'ngoService', '$location', '$state', function($scope, ngoService, $location, $state) {
    currentLocation = 2.3;

    $scope.ngos = ngoService.getAllNgos(); 

    $scope.ngoDistance = function (ngoLocation) {
        return ngoLocation - currentLocation;
    }
    $scope.onClick = function(ngo) {
        //$location.url('ngos/' + ngo.id);
        console.log('inside state go');
        $state.go('ngos-id', {id: ngo.id});
    }
}]);