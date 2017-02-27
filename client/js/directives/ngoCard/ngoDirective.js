myApp.directive('cardNgo', function() {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope:  {
            ngo: '=',
            onClick: '&'
        },
        templateUrl: 'js/directives/ngoCard/ngoTemplate.html',        
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
})