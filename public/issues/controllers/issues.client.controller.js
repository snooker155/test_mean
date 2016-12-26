/**
 * Created by anton on 26.12.16.
 */

angular.module('issues').controller('IssuesController', ['$scope', '$state', '$location', 'Authentication', 'Issues', 'Projects',
    function($scope, $state, $location, Authentication, Issues, Projects) {
        // $scope.authentication = Authentication;


        $scope.create = function() {

            var issue = new Issues({
                title: this.title,
                assign_to: this.assign_to,
                due_to: this.due_to,
                comment: this.comment,
                tags: this.tags
            });

            issue.$save(function(response) {
                $location.path('issues/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.issues = Issues.query();
        };

        $scope.findOne = function() {
            $scope.issue = Issues.get({
                issueId: $state.params.issueId
            });
        };

        $scope.update = function() {
            $scope.issue.$update(function() {
                $location.path('issues/' + $scope.issue._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(issue) {
            if (issue) {
                issue.$remove(function() {
                    for (var i in $scope.issues) {
                        if ($scope.issues[i] === issue) {
                            $scope.issues.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.issue.$remove(function() {
                    $location.path('issues');
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

        $scope.getData = function () {
            $scope.projects = Projects.query();
        };

        $scope.getTags = function () {
            $scope.allTags = ['dev','high','test','urgent','low','medium','bug','new'];
        };
    }
]);

