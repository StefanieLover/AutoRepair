define([], function () {
    "use strict";
    var config = ["$q", "$http", function ($q, $http) {
        var sender = function (url, config, params) {
            return $q(function (resolve, reject) {
                var cfg = $.extend({
                    url: 'http://10.0.141.248:8080' + url,
                    type: 'POST',
                    timeout: 30000,
                    headers: {},
                    cache: false,
                    contentType: "application/x-www-form-urlencoded; chartset='UTF-8'",
                    data: params,
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
    return config;
});
