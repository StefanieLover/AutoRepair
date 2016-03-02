define(["lazyload"], function (lazyloadModule) {
    "use strict";
    var configArr = [{
        name: "AutoRepair",
        url: "/AutoRepair",
        views: {
            header: {
                templateUrl: 'app/framework/views/head.html'
            },
            body: {
                template: '<div ui-view></div>'
            }
        }
    }, {
        name: "AutoRepair.home",
        url: "/home",
        templateUrl: "app/dev/views/test.html",
        controller: 'homeCtrl',
        scripts: {
            controllers: ["app/dev/controllers/home/homeCtrl"],
            services: ['app/dev/services/home/homeService']
        }
    }, {
        name: "AutoRepair.repairSheet",
        url: "/repairSheet",
        templateUrl: "app/dev/views/repairSheet/repairSheet.html",
        controller: 'repairSheetCtrl',
        scripts: {
            controllers: ["app/dev/controllers/repairSheet/repairSheetCtrl"]
        }
    }, {
        name: "AutoRepair.storageMange",
        url: "/storageMange",
        templateUrl: "app/dev/views/storageManage/storageManage.html",
        controller: 'storageManageCtrl',
        scripts: {
            controllers: ["app/dev/controllers/storageManage/storageManageCtrl"]
        }
    }, {
        name: "AutoRepair.finance",
        url: "/finance",
        templateUrl: "app/dev/views/finance/finance.html",
        controller: 'financeCtrl',
        scripts: {
            controllers: ["app/dev/controllers/finance/financeCtrl"]
        }
    }, {
        name: "AutoRepair.peopleList",
        url: "/peopleList",
        templateUrl: "app/dev/views/peopleList/peopleList.html",
        controller: 'peopleListCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/peopleListCtrl"],
            services: ['app/dev/services/peopleList/peopleService']
        }
    }, {
        name: "AutoRepair.peopleList.customer",
        url: "/customer",
        templateUrl: "app/dev/views/peopleList/customer.html",
        controller: 'peopleListCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/peopleListCtrl"]
        }
    }, {
        name: "AutoRepair.peopleList.supplier",
        url: "/supplier",
        templateUrl: "app/dev/views/peopleList/supplier.html",
        controller: 'peopleListCtrl',
        scripts: {
            controllers: ["app/dev/controllers/peopleList/peopleListCtrl"]
        }
    }, {
        name: "AutoRepair.other",
        url: "/other",
        templateUrl: "app/dev/views/test.html"
    }];
    var devModule = angular.module("devModule", []);
    devModule = lazyloadModule.makeLazy(devModule);
    devModule.stateConfig({stateConfig: configArr});
    return devModule;
});
