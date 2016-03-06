define([], function(){
    "use strict";
    var config = ["HttpService", function(HttpService){
        return {
            saveOrUpdateCustomer: function (params) {
                return HttpService.post('/customer/saveOrUpdateCustomer', params);
            },
            getCustomerList: function(){
                return HttpService.post('/customer/getCustomerList');
            }
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.service('peopleService', config);
});
