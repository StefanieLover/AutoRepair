/**
 * Created by zhangzhiping on 11/4/15.
 */
define(["angular",
    "i18nService",
    "ui-router",
    "debRouter",
    "app/framework/service/HttpService"], function (angular, i18nService, router, debRouter, HttpService) {
    "use strict";
    var dependence = ['pascalprecht.translate', 'ngCookies', 'ui.router', debRouter.name];
    var app = angular.module('autoRepair', dependence);
    window.MODULE_NAME = debRouter.name;
    app.service('i18nService', i18nService);
    app.service('HttpService', HttpService);
    app.factory('$translateCookieStorage', i18nService);
    app.config(['$translateProvider', function ($translateProvider) {
        // 设置策略
        $translateProvider.useSanitizeValueStrategy('escaped');
        // 使用cookies存储
        $translateProvider.useCookieStorage();
        // 存储Key
        $translateProvider.storageKey('Language');
        //  静态文件配置
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/language/',
            suffix: '.json'
        });
        // 偏好语言
        $translateProvider.preferredLanguage('zh_CN');
    }]);

    return app;
})
