/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'example/views/example.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
