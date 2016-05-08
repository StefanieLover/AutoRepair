define([], function(){
    "use strict";
    var config = ["HttpService", function(HttpService){
        return {
            saveOrUpdateCustomer: function (params) {
                return HttpService.post('/customer/saveOrUpdateCustomer', params);
            },
            getCustomerList: function(){
                return HttpService.get('/customer/getCustomerList');
            },
            saveOrUpdateSupplier: function (params) {
                return HttpService.post('/supplier/saveOrUpdateSupplier', params);
            },
            getSupplierList: function(){
                return HttpService.get('/supplier/getSupplierList');
            }
        }
    }];
    var devModule = angular.module(MODULE_NAME);
    devModule.service('peopleService', config);
});
