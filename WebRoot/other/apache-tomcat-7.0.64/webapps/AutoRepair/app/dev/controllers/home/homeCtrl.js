define([], function () {
    "use strict";
    var config = ["$scope", "homeService", function ($scope, homeService) {
        homeService.getAllRepairSheets({
            name: 'zzp'
        }).then(function (data) {
            console.info(data);
        });
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('homeCtrl', config);
});
