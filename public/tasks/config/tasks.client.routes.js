/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('tasks').config(['$stateProvider',
    function($stateProvider) {
        var tasksState = {
            name: 'tasks',
            url: '/tasks',
            templateUrl: 'tasks/views/list-tasks.client.view.html'
        };

        var tasksCreateState = {
            name: 'tasksCreate',
            url: '/tasks/create',
            templateUrl: 'tasks/views/create-task.client.view.html'
        };

        var taskState = {
            name: 'task',
            url: '/tasks/:taskId',
            templateUrl: 'tasks/views/view-task.client.view.html'
        };

        var taskEditState = {
            name: 'taskEdit',
            url: '/tasks/:taskId/edit',
            templateUrl: 'tasks/views/edit-task.client.view.html'
        };

        $stateProvider.state(tasksState);
        $stateProvider.state(tasksCreateState);
        $stateProvider.state(taskState);
        $stateProvider.state(taskEditState);
    }
]);


// angular.module('tasks').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/tasks', {
//             templateUrl: 'tasks/views/list-tasks.client.view.html'
//         }).
//         when('/tasks/create', {
//             templateUrl: 'tasks/views/create-task.client.view.html'
//         }).
//         when('/tasks/:taskId', {
//             templateUrl: 'tasks/views/view-task.client.view.html'
//         }).
//         when('/tasks/:taskId/edit', {
//             templateUrl: 'tasks/views/edit-task.client.view.html'
//         });
//     }
// ]);