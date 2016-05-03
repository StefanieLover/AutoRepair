define([], function () {
    "use strict";
    var config = ["$scope", "homeService", function ($scope, homeService) {
        /*homeService.getAllRepairSheets({
            name: 'zzp'
        }).then(function (data) {
            console.info(data);
        });
        homeService.saveOrUpdateCustomer({
            id: 1,
            name: 'testName1',
            carCardNumber: '粤B88888',
            carType: 'testType',
            phoneNumber: '18575699426'
        }).then(function (data) {
            console.info(data);
        });*/
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('homeCtrl', config);
});
