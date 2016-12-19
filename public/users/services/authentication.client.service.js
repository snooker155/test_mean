/**
 * Created by anton on 20.12.16.
 */

angular.module('users').factory('Authentication', [
    function() {
        this.user = window.user;
        return {
            user: this.user
        };
    }
]);
