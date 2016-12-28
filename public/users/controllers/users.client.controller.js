/**
 * Created by anzubare on 28.12.2016.
 */

angular.module('users').controller('UsersController', ['$scope', '$state', '$location', 'Authentication', 'Users',
    function($scope, $state, $location, Authentication, Users) {
        // $scope.authentication = Authentication;

        // $scope.create = function() {
        //
        //     var task = new Tasks({
        //         title: this.title,
        //         project: this.project,
        //         assign_to: this.assign_to,
        //         from: this.from,
        //         due_to: this.due_to,
        //         comment: this.comment,
        //         tags: this.tags,
        //         todos: [],
        //         activities: [{
        //             user: window.user,
        //             comment: "A new task '" + this.title + "' has been created",
        //             date: new Date
        //         }]
        //     });
        //
        //     task.$save(function(response) {
        //         $location.path('tasks/' + response._id);
        //     }, function(errorResponse) {
        //         $scope.error = errorResponse.data.message;
        //     });
        // };

        $scope.find = function() {
            $scope.users = Users.query();
        };

        // $scope.findOne = function() {
        //     $scope.task = Tasks.get({
        //         taskId: $state.params.taskId
        //     });
        // };
        //
        // $scope.update = function() {
        //     $scope.task.activities.push({
        //         user: window.user,
        //         comment: "The task '" + $scope.task.title + "' has been updated",
        //         date: new Date
        //     });
        //     $scope.task.$update(function() {
        //         $location.path('tasks/' + $scope.task._id);
        //     }, function(errorResponse) {
        //         $scope.error = errorResponse.data.message;
        //     });
        // };
        //
        // $scope.delete = function(task) {
        //     if (task) {
        //         task.$remove(function() {
        //             for (var i in $scope.tasks) {
        //                 if ($scope.tasks[i] === task) {
        //                     $scope.tasks.splice(i, 1);
        //                 }
        //             }
        //         });
        //     } else {
        //         $scope.task.$remove(function() {
        //             $location.path('tasks');
        //         });
        //     }
        // };

    }
]);
