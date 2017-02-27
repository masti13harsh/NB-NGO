myApp.directive('contactNgo', function() {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope:  {
            ngo: '=',
            onClick: '&'
        },
        templateUrl: 'js/directives/contactNgo/contactNgo.html',        
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
})