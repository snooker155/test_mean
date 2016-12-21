/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('teams').config(['$stateProvider',
    function($stateProvider) {
        var teamsState = {
            name: 'teams',
            url: '/teams',
            templateUrl: 'teams/views/list-teams.client.view.html'
        };

        $stateProvider.state(teamsState);
    }
]);


// angular.module('teams').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/teams', {
//             templateUrl: 'teams/views/list-teams.client.view.html'
//         });
//     }
// ]);
