define(["ui-router"], function (router) {
    "use strict";
    var config = ["$stateProvider", "$urlRouterProvider", "$locationProvider",
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
    }];

    var framworkRouter = angular.module('framworkRouter', ['ui.router']);
    framworkRouter.config(config);
    return framworkRouter;
});