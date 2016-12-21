/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('calendar').config(['$stateProvider',
    function($stateProvider) {
        var calendarState = {
            name: 'calendar',
            url: '/calendar',
            templateUrl: 'calendar/views/calendar.client.view.html'
        };

        $stateProvider.state(calendarState);
    }
]);


// angular.module('calendar').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/calendar', {
//             templateUrl: 'calendar/views/calendar.client.view.html'
//         });
//     }
//]);
