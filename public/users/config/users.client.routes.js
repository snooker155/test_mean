/**
 * Created by anzubare on 28.12.2016.
 */

angular.module('users').config(['$stateProvider',
    function($stateProvider) {
        var usersState = {
            name: 'users',
            url: '/users',
            templateUrl: 'users/views/list-users.client.view.html'
        };

        var usersCreateState = {
            name: 'usersCreate',
            url: '/users/create/',
            templateUrl: 'users/views/create-user.client.view.html'
        };

        var userState = {
            name: 'user',
            url: '/users/:userId',
            templateUrl: 'users/views/view-user.client.view.html'
        };

        var userEditState = {
            name: 'userEdit',
            url: '/users/:userId/edit',
            templateUrl: 'users/views/edit-user.client.view.html'
        };

        $stateProvider.state(usersState);
        $stateProvider.state(usersCreateState);
        $stateProvider.state(userState);
        $stateProvider.state(userEditState);
    }
]);

