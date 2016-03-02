define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", function ($scope, peopleService) {
        $scope.customer={};
        $scope.saveOrUpdateCustomer = function () {
            peopleService.saveOrUpdateCustomer($scope.customer).then(function (data) {
                if(data.status == "success"){
                    console.info(data.status)
                }
            });
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('peopleListCtrl', config);
});
