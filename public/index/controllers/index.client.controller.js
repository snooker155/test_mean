/**
 * Created by anzubare on 20.12.2016.
 */

angular.module('index').controller('IndexController', ['$scope', '$state', '$location', 'Authentication', 'Tasks',
    function($scope, $state, $location, Authentication, Tasks) {

        $scope.getActivityStream = function () {
             var activities = [];
             Tasks.query(function (response) {
                 response.forEach(function (task) {
                     task.activities.forEach(function (activity) {
                         activities.push(activity);
                     });
                 });
             });
             console.log(activities);
             $scope.activities = activities;
        };

        $scope.getTasks = function () {
            $scope.tasks = Tasks.query();
        };
    }
]);
