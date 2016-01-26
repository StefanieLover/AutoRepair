define([], function(){
    "use strict";
    var config = ["HttpService", function(HttpService){
        return {
            getAllRepairSheets: function(params){
                return HttpService.post('/repairSheet/getAllRepairSheets', params);
            }
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.service('homeService', config);
});
