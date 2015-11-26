/**
 * Created by zhangzhiping on 11/4/15.
 */
define(["angular",
    "i18nService",
    "ui-router",
    "fmRouter",
    "debRouter"], function (angular, i18nService, router, fmRouter, debRouter) {
    "use strict";
    var dependence = ['pascalprecht.translate', 'ngCookies', 'ui.router', fmRouter.name, debRouter.name];
    var app = angular.module('autoRepair', dependence);
    app.service('i18nService', i18nService);
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
