/**
 * Created by anzubare on 21.12.2016.
 */

angular.module('projects').factory('Projects', ['$resource',
    function($resource) {
        return $resource('api/projects/:projectId', {
            taskId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
