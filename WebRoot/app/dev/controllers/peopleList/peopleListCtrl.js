define([], function () {
    "use strict";
    var config = ["$scope", "peopleService", "$state", function ($scope, peopleService, $state) {
        if($state.$current.name !== 'peopleList.customer' && $state.$current.name !== 'peopleList.supplier'){
            $state.go('peopleList.customer');
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.controller('peopleListCtrl', config);
});
