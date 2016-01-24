define([], function(){
    "use strict";
    var config = ["HttpService", function(HttpService){
        return {
            getAllRepairSheets: function(params){
                HttpService.post('/params/getAllRepairSheets', params);
            }
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.service('homeService', config);
});
