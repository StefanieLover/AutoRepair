define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", "$state", function ($scope, peopleService, $state) {

    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('supplierCtrl', config);
});
