/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('index').config(['$stateProvider',
    function($stateProvider) {
        var indexState = {
            name: 'index',
            url: '/',
            templateUrl: 'index/views/index.client.view.html'
        }

        $stateProvider.state(indexState);
    }
]);


// angular.module('index').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/', {
//             templateUrl: 'index/views/index.client.view.html'
//         });
//         // }).
//         // otherwise({
//         //     redirectTo: '/'
//         // });
//     }
// ]);
