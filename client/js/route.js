myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('templates/404page.html');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'templates/initialChoice.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('ngos', {
            // we'll get to this in a bit
            url: '/ngos',
            templateUrl: 'templates/ngos.html',
            controller: "ngosController"
        }).state('ngos-id', {
            // we'll get to this in a bit
            url: '/ngos/:id',
            templateUrl: 'templates/ngo.html',
            controller: "ngoController"
        }).state('ngos-id-donate', {
            // we'll get to this in a bit
            url: '/ngos/:id/donate',
            templateUrl: 'templates/ngoDonate.html',
            controller: "ngoDonateController"
        }).state('ngos-id-donate-confirm', {
            // we'll get to this in a bit
            url: '/ngos/:id/donate/confirm',
            templateUrl: 'templates/ngoDonateConfirm.html',
            controller: "ngoDonateConfirmController"
        });
    
    // $routeProvider
    //     .when('/', { 
    //         templateUrl: "templates/initialChoice.html"
    //     })
    //     .when('/ngos', { 
    //         templateUrl: "templates/ngos.html",
    //         controller: "ngosController"
    //     })
    //     .when('/ngos/:id', {
    //         templateUrl: "templates/ngo.html",
    //         controller: "ngoController"
    //     })
    //      .when('/ngos/:id/donate', {
    //         templateUrl: "templates/ngo.html",
    //         controller: "ngoController"
    //     })
    //     .otherwise({
    //         templateUrl : "templates/404page.html"
    //     });
}]);