/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('tasks').controller('TasksController', ['$scope', '$routeParams', '$location', 'Authentication', 'Tasks',
    function($scope, $routeParams, $location, Authentication, Tasks) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var task = new Tasks({
                title: this.title,
                comment: this.comment
            });

            task.$save(function(response) {
                $location.path('tasks/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.tasks = Tasks.query();
        };

        $scope.findOne = function() {
            $scope.task = Tasks.get({
                taskId: $routeParams.taskId
            });
        };

        $scope.update = function() {
            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(task) {
            if (task) {
                task.$remove(function() {
                    for (var i in $scope.tasks) {
                        if ($scope.tasks[i] === task) {
                            $scope.tasks.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.task.$remove(function() {
                    $location.path('tasks');
                });
            }
        };
    }
]);
