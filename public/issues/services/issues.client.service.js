/**
 * Created by anton on 26.12.16.
 */


angular.module('issues').factory('Issues', ['$resource',
    function($resource) {
        return $resource('api/issues/:issueId', {
            taskId: '@_id'
        },  {
            update: {
                method: 'PUT'
            }
        });
    }
]);
