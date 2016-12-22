/**
 * Created by anzubare on 13.12.2016.
 */

var appName = 'mean';
var app = angular.module(appName, [
    'ui.bootstrap',                 // ui.bootstrap
    'ui.router',                    // Routing
    // 'oc.lazyLoad',                  // ocLazyLoad
    // 'pascalprecht.translate',       // Angular Translate
    // 'ngIdle',                       // Idle timer
    // 'ngSanitize',
    'ngResource',
    // 'ngRoute',
    'index',
    'users',
    'tasks',
    'projects',
    'issues',
    'teams',
    'calendar',
    'agile',
    'customers'
]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

// angular.element(document).ready(function() {
//     angular.bootstrap(document, [appName]);
// });
