/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('tasks').controller('TasksController', ['$scope', '$state', '$location', 'Authentication', 'Tasks', 'Projects',
    function($scope, $state, $location, Authentication, Tasks, Projects) {
        // $scope.authentication = Authentication;

        $scope.newTodo = {};

        $scope.create = function() {
            console.log(this);
            var task = new Tasks({
                title: this.title,
                project: this.project,
                assign_to: this.assign_to,
                due_to: this.due_to,
                comment: this.comment,
                tags: this.tags,
                todos: []
            });

            console.log(task);

            // task.$save(function(response) {
            //     $location.path('tasks/' + response._id);
            // }, function(errorResponse) {
            //     $scope.error = errorResponse.data.message;
            // });
        };

        $scope.find = function() {
            $scope.tasks = Tasks.query();
        };

        $scope.findOne = function() {
            $scope.task = Tasks.get({
                taskId: $state.params.taskId
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

        $scope.createTodo = function () {
            $scope.task.todos.push({
                title: $scope.newTodo.title,
                completed: false
            });

            var completed_num = 0;
            $scope.task.todos.forEach(function (todo) {
               if(todo.completed){
                   completed_num++;
               }
            });
            $scope.task.progress = completed_num / $scope.task.todos.length * 100;

            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            $scope.newTodo = {};
            $scope.formTodo = false;
        };

        $scope.complete = function () {
            var completed_num = 0;
            $scope.task.todos.forEach(function (todo) {
                if(todo.completed){
                    completed_num++;
                }
            });
            $scope.task.progress = completed_num / $scope.task.todos.length * 100;

            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.updateTodo = function () {
            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            $scope.updateFormTodo = false;
        };
    }
]);
