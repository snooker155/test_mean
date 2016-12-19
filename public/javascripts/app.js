/**
 * Created by anzubare on 13.12.2016.
 */

var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
