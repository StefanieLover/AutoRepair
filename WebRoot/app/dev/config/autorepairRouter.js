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
        name: "AutoRepair.other",
        url: "/other",
        templateUrl: "app/dev/views/test.html"
    }];
    var devModule = angular.module("devModule", []);
    devModule = lazyloadModule.makeLazy(devModule);
    devModule.stateConfig({stateConfig: configArr});
    return devModule;
});
