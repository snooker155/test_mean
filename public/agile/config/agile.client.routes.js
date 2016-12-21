/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('agile').config(['$stateProvider',
    function($stateProvider) {
        var agileState = {
            name: 'agile',
            url: '/agile',
            templateUrl: 'agile/views/agile.client.view.html'
        };

        $stateProvider.state(agileState);
    }
]);


// angular.module('agile').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/agile', {
//             templateUrl: 'agile/views/agile.client.view.html'
//         });
//     }
// ]);
