"use strict";
require.config({
    //配置angular的路径
    paths: {
        "angular": "js/angularjs/angular",
        "ui-router":"js/angularjs/angular-ui-router.min",
        "jquery":"js/jQuery/jquery-1.9.1.min",
        "translate":"js/angularjs/angular-translate.min",
        "cookies":"js/angularjs/angular-cookies",
        "static-file":"js/angularjs/angular-translate-loader-static-files.min",
        "i18nService":"app/i18n/i18nService",
        "lazyload":"js/lazyload/lazyload",
        "fmRouter":"app/framwork/framworkRouter",
        "debRouter":"app/dev/config/autorepairRouter"
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        "angular": {
            deps: ['jquery'],
            exports: 'angular'
        },
        "ui-router": {
            deps: ['angular']
        },
        "i18nService": {
            deps: ['translate', 'cookies', 'static-file']
        },
        "translate": {
            deps: ['angular']
        },
        "cookies": {
            deps: ['angular']
        },
        "static-file": {
            deps: ['translate']
        }
    }
});

require(["app/app","app/framwork/controller/MainController"], function (app, ctrl) {
    angular.bootstrap(document,[app.name]);
});