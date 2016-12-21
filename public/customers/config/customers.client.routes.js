/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('customers').config(['$stateProvider',
    function($stateProvider) {
        var customersState = {
            name: 'customers',
            url: '/customers',
            templateUrl: 'customers/views/list-customers.client.view.html'
        };

        var customersCreateState = {
            name: 'customersCreate',
            url: '/projects/create',
            templateUrl: 'projects/views/create-customer.client.view.html'
        };

        var customerState = {
            name: 'customer',
            url: '/customers/:customerId',
            templateUrl: 'projects/views/view-customer.client.view.html'
        };

        var customerEditState = {
            name: 'customerEdit',
            url: '/customers/:customerId/edit',
            templateUrl: 'customers/views/edit-customer.client.view.html'
        };

        $stateProvider.state(customersState);
        $stateProvider.state(customersCreateState);
        $stateProvider.state(customerState);
        $stateProvider.state(customerEditState);
    }
]);



// angular.module('customers').config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/customers', {
//             templateUrl: 'customers/views/list-customers.client.view.html'
//         }).
//         when('/customers/create', {
//             templateUrl: 'customers/views/create-customer.client.view.html'
//         }).
//         when('/customers/:customerId', {
//             templateUrl: 'customers/views/view-customer.client.view.html'
//         }).
//         when('/customers/:customerId/edit', {
//             templateUrl: 'customers/views/edit-customer.client.view.html'
//         });
//     }
// ]);
