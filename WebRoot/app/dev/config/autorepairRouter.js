define(["lazyload"], function (lazyloadModule) {
    "use strict";
    var configArr = [{
        name: "AutoRepair",
        url: "/",
        views: {
            header: {
                templateUrl: 'app/framework/views/head.html'
            },
            body: {
                template: '<div ui-view></div>'
            }
        }
    }, {
        name: "home",
        url: "/home",
        templateUrl: "app/dev/views/test.html",
        controller: 'homeCtrl',
        scripts: {
          controllers: ["app/dev/controllers/home/homeCtrl"]
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
