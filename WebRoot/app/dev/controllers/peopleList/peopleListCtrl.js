define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", "$state", function ($scope, peopleService, $state) {
        if($state.$current.name !== 'AutoRepair.peopleList.customer'){
            $state.go('AutoRepair.peopleList.customer');
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('peopleListCtrl', config);
});
