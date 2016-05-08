define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", "$state", function ($scope, peopleService, $state) {
        if($state.$current.name !== 'peopleList.customer'){
            $state.go('peopleList.customer');
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('peopleListCtrl', config);
});
