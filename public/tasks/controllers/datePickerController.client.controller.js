/**
 * Created by anzubare on 23.12.2016.
 */

angular.module('tasks').controller('datePickerController', ['$scope',
    function($scope, Projects) {

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
    }
]);

