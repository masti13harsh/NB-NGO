myApp.controller('ngosController', ['$scope', 'ngoService', '$location', '$state', function($scope, ngoService, $location, $state) {
    currentLocation = 2.3;

    $scope.ngos = ngoService.getAllNgos(); 

    // $scope.ngoDistance = function (ngoLocation) {
    //     return ngoLocation - currentLocation;
    // }
     $scope.ngoDistance = google.maps.geometry.spherical.computeDistanceBetween (new google.maps.LatLng(48.857, 2.352), new google.maps.LatLng(49.852, 3.526));
    console.log($scope.ngoDistance);
    $scope.onClick = function(ngo) {
        //$location.url('ngos/' + ngo.id);
        console.log('inside state go');
        $state.go('ngos-id', {id: ngo.id});
    }
}]);