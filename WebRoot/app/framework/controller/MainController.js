/**
 * Created by zhangzhiping on 11/4/15.
 */
define(["../../app"], function (app) {
    "use strict";
    var config = ["$scope", function ($scope) {
        $scope.url = {
            header: 'app/framework/views/head.html'
        }
    }];
    app.controller('MainController', config);
});
