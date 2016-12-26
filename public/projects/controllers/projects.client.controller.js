/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('projects').controller('ProjectsController', ['$scope', '$state', '$location', 'Authentication', 'Projects', 'Users',
    function($scope, $state, $location, Authentication, Projects, Users) {
        //$scope.authentication = Authentication;

        $scope.create = function() {
            var project = new Projects({
                title: this.title,
                comment: this.comment,
                due_to: this.due_to,
                team: this.team,
                tags: this.tags,
                tasks: []
            });

            project.$save(function(response) {
                $location.path('projects/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.projects = Projects.query();
        };

        $scope.findOne = function() {
            $scope.project = Projects.get({
                projectId: $state.params.projectId
            });
        };

        $scope.update = function() {
            $scope.project.$update(function() {
                $location.path('projects/' + $scope.project._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(project) {
            if (project) {
                project.$remove(function() {
                    for (var i in $scope.projects) {
                        if ($scope.projects[i] === project) {
                            $scope.projects.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.project.$remove(function() {
                    $location.path('projects');
                });
            }
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

        $scope.getTags = function () {
            $scope.allTags = ['dev','high','test','urgent','low','medium','bug','new'];
        };

        $scope.getUsers = function(){
            $scope.users = Users.query();
        };
    }
]);

