define(["lazyload"], function (lazyloadModule) {
    "use strict";
    var configArr = [{
        name: "AutoRepair",
        url: "/AutoRepair",
        views: {
            header: {
                templateUrl: 'app/dev/views/test.html'
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
});