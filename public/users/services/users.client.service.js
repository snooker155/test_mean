/**
 * Created by anton on 26.12.16.
 */

angular.module('users').factory('Users', ['$resource',
    function($resource) {
        return $resource('api/users/:userId', {
            taskId: '@_id'
        },  {
            update: {
                method: 'PUT'
            }
        });
    }
]);
