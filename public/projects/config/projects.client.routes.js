/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('projects').config(['$stateProvider',
    function($stateProvider) {
        var projectsState = {
            name: 'projects',
            url: '/projects',
            templateUrl: 'projects/views/list-projects.client.view.html'
        };

        var projectsCreateState = {
            name: 'projects.create',
            url: '/projects/create',
            templateUrl: 'projects/views/create-project.client.view.html'
        };

        var projectState = {
            name: 'projects.project',
            url: '/projects/:projectId',
            templateUrl: 'projects/views/view-project.client.view.html'
        };

        var projectEditState = {
            name: 'projects.project.edit',
            url: '/projects/:projectId/edit',
            templateUrl: 'projects/views/edit-project.client.view.html'
        };

        $stateProvider.state(projectsState);
        $stateProvider.state(projectsCreateState);
        $stateProvider.state(projectState);
        $stateProvider.state(projectEditState);
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
