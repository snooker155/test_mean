/**
 * Created by anzubare on 23.12.2016.
 */

angular.module('tasks').controller('chosenController', ['$scope', 'Projects',
    function($scope, Projects) {

        $scope.getData = function () {
            $scope.projects = Projects.query();
        };
    }
]);
