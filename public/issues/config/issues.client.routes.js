/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('issues').config(['$stateProvider',
    function($stateProvider) {
        var issuesState = {
            name: 'issues',
            url: '/issues',
            templateUrl: 'issues/views/list-issues.client.view.html'
        };

        var issuesCreateState = {
            name: 'issuesCreate',
            url: '/issues/create',
            templateUrl: 'issues/views/create-issue.client.view.html'
        };

        var issueState = {
            name: 'issue',
            url: '/issues/:issueId',
            templateUrl: 'issues/views/view-issue.client.view.html'
        };

        var issueEditState = {
            name: 'issueEdit',
            url: '/issues/:issueId/edit',
            templateUrl: 'issues/views/edit-issue.client.view.html'
        };

        $stateProvider.state(issuesState);
        $stateProvider.state(issuesCreateState);
        $stateProvider.state(issueState);
        $stateProvider.state(issueEditState);
    }
]);


// angular.module('issues').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/issues', {
//             templateUrl: 'issues/views/list-issues.client.view.html'
//         }).
//         when('/issues/create', {
//             templateUrl: 'issues/views/create-issue.client.view.html'
//         }).
//         when('/issues/:issueId', {
//             templateUrl: 'issues/views/view-issue.client.view.html'
//         }).
//         when('/issues/:issueId/edit', {
//             templateUrl: 'issues/views/edit-issue.client.view.html'
//         });
//     }
// ]);
