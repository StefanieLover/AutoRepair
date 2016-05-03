define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", "$state", function ($scope, peopleService, $state) {
        $scope.customer={};
        $scope.showAddCustom = false;
        $scope.saveOrUpdateCustomer = function () {
            peopleService.saveOrUpdateCustomer($scope.customer).then(function (data) {
                if(data.status == "success"){
                    console.info(data.status)
                }
            });
        };
        peopleService.getCustomerList().then(function (data) {
            $scope.customers = data;
        });
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('customerCtrl', config);
});
