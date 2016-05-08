define(["lazyload"], function (lazyloadModule) {
    "use strict";
    var configArr = [{
        name: "init",
        url: "/",
        controller: ['$state', function ($state) {
            $state.go('home', {});
        }]
    }, {
        name: "home",
        url: "/home",
        templateUrl: "app/dev/views/test.html",
        controller: 'homeCtrl',
        scripts: {
            controllers: ["app/dev/controllers/home/homeCtrl"],
            services: ['app/dev/services/home/homeService']
        }
    }, {
        name: "repairSheet",
        url: "/repairSheet",
        templateUrl: "app/dev/views/repairSheet/repairSheet.html",
        controller: 'repairSheetCtrl',
        scripts: {
            controllers: ["app/dev/controllers/repairSheet/repairSheetCtrl"]
        }
    }, {
        name: "storageMange",
        url: "/storageMange",
        templateUrl: "app/dev/views/storageManage/storageManage.html",
        controller: 'storageManageCtrl',
        scripts: {
            controllers: ["app/dev/controllers/storageManage/storageManageCtrl"]
        }
    }, {
        name: "finance",
        url: "/finance",
        templateUrl: "app/dev/views/finance/finance.html",
        controller: 'financeCtrl',
        scripts: {
            controllers: ["app/dev/controllers/finance/financeCtrl"]
        }
    }, {
        name: "peopleList",
        url: "/peopleList",
        templateUrl: "app/dev/views/peopleList/peopleList.html",
        controller: 'peopleListCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/peopleListCtrl"],
            services: ['app/dev/services/peopleList/peopleService']
        }
    }, {
        name: "peopleList.customer",
        url: "/customer",
        templateUrl: "app/dev/views/peopleList/customer.html",
        controller: 'customerCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/customerCtrl"]
        }
    }, {
        name: "peopleList.supplier",
        url: "/supplier",
        templateUrl: "app/dev/views/peopleList/supplier.html",
        controller: 'supplierCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/supplierCtrl"]
        }
    }, {
        name: "other",
        url: "/other",
        templateUrl: "app/dev/views/test.html"
    }];
    var devModule = angular.module("devModule", []);
    devModule = lazyloadModule.makeLazy(devModule);
    devModule.stateConfig({stateConfig: configArr});
    devModule.config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
    }]);
    return devModule;
});
