define([], function(){
    "use strict";
    var config = ["HttpService", function(HttpService){
        return {
            saveOrUpdateCustomer: function (params) {
                return HttpService.post('/customer/saveOrUpdateCustomer', params);
            }
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.service('peopleService', config);
});
