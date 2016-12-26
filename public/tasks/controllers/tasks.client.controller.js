/**
 * Created by anzubare on 19.12.2016.
 */

angular.module('tasks').controller('TasksController', ['$scope', '$state', '$location', 'Authentication', 'Tasks', 'Projects', 'Users',
    function($scope, $state, $location, Authentication, Tasks, Projects, Users) {
        // $scope.authentication = Authentication;

        $scope.newTodo = {};
        $scope.newTask = {};

        $scope.create = function() {
            console.log(this);

            var task = new Tasks({
                title: this.title,
                project: this.project,
                assign_to: this.assign_to,
                due_to: this.due_to,
                comment: this.comment,
                tags: this.tags,
                todos: [],
                activities: [{
                    user: window.user,
                    comment: "A new task '" + this.title + "' has been created",
                    date: new Date
                }]
            });

            console.log(task)

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
                taskId: $state.params.taskId
            });
        };

        $scope.update = function() {
            $scope.task.activities.push({
                user: window.user,
                comment: "The task '" + $scope.task.title + "' has been updated",
                date: new Date
            });
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

            $scope.task.activities.push({
                user: window.user,
                comment: "A new ToDo '" + $scope.newTodo.title + "' was added to the task '" + $scope.task.title + "'",
                date: new Date
            });

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

            $scope.task.activities.push({
                user: window.user,
                comment: "The ToDo has been completed in the task '" + $scope.task.title + "'",
                date: new Date
            });

            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.updateTodo = function () {
            $scope.task.activities.push({
                user: window.user,
                comment: "The ToDo has been updated in the task '" + $scope.task.title + "'",
                date: new Date
            });

            $scope.task.$update(function() {
                $location.path('tasks/' + $scope.task._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            $scope.updateFormTodo = false;
        };

        $scope.today = function(){
            return new Date();
        };

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.getData = function () {
            $scope.projects = Projects.query();
        };

        $scope.getTags = function () {
            $scope.allTags = ['dev','high','test','urgent','low','medium','bug','new'];
        };

        $scope.getUsers = function(){
            $scope.users = Users.query();
        };

    }
]);
