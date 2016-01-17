define([], function () {
    "use strict";
    var config = ["$q", "$http", function ($q, $http) {
        var sender = function (url, config, params) {
            return $q(function (resolve, reject) {
                var cfg = $.extend({
                    url: 'localhost:8888/' + url,
                    type: 'POST',
                    timeout: 30000,
                    headers: {},
                    cache: false,
                    contentType: "application/x-www-form-urlencoded; chartset='UTF-8'",
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (data) {
                        reject(arguments);
                    }
                }, config);
                $.ajax(cfg);
            });
        };

        this.post = function (url, params) {
            return sender(url, {
                type: 'POST'
            }, params);
        };

        this.get = function (url, params) {
            return sender(url, {
                type: 'GET'
            }, params);
        };
    }];
});
