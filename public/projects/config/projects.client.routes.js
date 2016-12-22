/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('projects').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        var projectsState = {
            name: 'projects',
            url: '/projects',
            templateUrl: 'projects/views/list-projects.client.view.html'
        };

        var projectsCreateState = {
            name: 'projectCreate',
            url: '/projects/create',
            templateUrl: 'projects/views/create-project.client.view.html'
        };

        var projectState = {
            name: 'project',
            url: '/projects/:projectId',
            templateUrl: 'projects/views/view-project.client.view.html'
        };

        var projectEditState = {
            name: 'projectEdit',
            url: '/projects/:projectId/edit',
            templateUrl: 'projects/views/edit-project.client.view.html'
        };

        $stateProvider.state(projectsState)
        .state(projectsCreateState)
        .state(projectState)
        .state(projectEditState);

        $urlRouterProvider.otherwise('/');
    }
]);



// angular.module('projects').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/projects', {
//             templateUrl: 'projects/views/list-projects.client.view.html'
//         }).
//         when('/projects/create', {
//             templateUrl: 'projects/views/create-project.client.view.html'
//         }).
//         when('/projects/:projectId', {
//             templateUrl: 'projects/views/view-project.client.view.html'
//         }).
//         when('/projects/:projectId/edit', {
//             templateUrl: 'projects/views/edit-project.client.view.html'
//         });
//     }
// ]);
