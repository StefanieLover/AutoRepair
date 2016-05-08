define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", function ($scope, peopleService) {
        $scope.supplier={};
        $scope.showAddSupplier = false;
        $scope.saveOrUpdateSupplier = function () {
            peopleService.saveOrUpdateSupplier($scope.supplier).then(function (data) {
                if(data.status === "success"){
                    console.info(data.status)
                }
            });
        };
        peopleService.getSupplierList().then(function (data) {
            $scope.suppliers = data;
        });
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('supplierCtrl', config);
});
