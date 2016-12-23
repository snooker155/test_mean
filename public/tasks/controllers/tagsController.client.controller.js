/**
 * Created by anzubare on 23.12.2016.
 */

angular.module('tasks').controller('tagsController', ['$scope',
    function($scope) {

        $scope.getTags = function () {
            $scope.allTags = ['dev','high','test','urgent','low','medium','bug','new'];
        };
    }
]);

