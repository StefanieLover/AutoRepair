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
        name: "AutoRepair.other",
        url: "/other",
        templateUrl: "app/dev/views/test.html"
    }];
    var devModule = angular.module("devModule", []);
    devModule = lazyloadModule.makeLazy(devModule);
    devModule.stateConfig({stateConfig: configArr});
    return devModule;
    //2016-01-11T12:36:41.450969Z 1 [Note]
    //s generated for root@localhost: 0MhoktYwtc%j
});