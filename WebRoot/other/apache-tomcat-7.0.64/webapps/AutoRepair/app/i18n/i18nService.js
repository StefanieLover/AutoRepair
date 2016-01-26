define([], function () {
    "use strict";
    return ['$cookies', function ($cookies) {
        return {
            get: function (name) {
                return $cookies[name];
            },
            set: function (name, value) {
                $cookies[name] = value;
            },
            put: function (name, value) {
                $cookies[name] = value;
            }
        }
    }];
});