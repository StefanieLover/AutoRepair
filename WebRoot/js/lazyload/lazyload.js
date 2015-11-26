/**
 * 实现懒加载功能的模块lazy，该模块依赖ui.router
 *
 */
define(["ui-router"], function (router) {
    //初始化懒加载模块
    var lazy = angular.module('lazy', ['ui.router']);
    
    lazy.makeLazy = function (module) {
        module.config(function ($compileProvider, $filterProvider, $controllerProvider, $provide) {
            module.directive = lazy.register($compileProvider.directive);
            module.filter = lazy.register($filterProvider.register);
            module.controller = lazy.register($controllerProvider.register);
            module.provider = lazy.register($provide.provider);
            module.service = lazy.register($provide.service);
            module.factory = lazy.register($provide.factory);
            module.value = lazy.register($provide.value);
            module.constant = lazy.register($provide.constant);

        });

        //对ui.router的状态配置方法￥stateProvider.state做进一步的封装
        //用户直接传入配置对象，即可完成状态的配置
        module.stateConfig = function (routerConfig) {
            if(!angular.isObject(routerConfig)){
                return;
            };
            module.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
                // 通过stateProvider进行状态配置
                if(isConfigArrayLike(routerConfig.stateConfig)){
                    var normalConfig = null;
                    // 对数组中每一个元素，先进行解析，然后￥stateProvider进行配置
                    angular.forEach(routerConfig.stateConfig, function (stateConfig, key) {
                        normalConfig = lazy.parseConfig(stateConfig);
                        $stateProvider.state(normalConfig);
                    });
                }
                // 通过$urlRouterProvider进行url路由配置
                if(isConfigArrayLike(routerConfig.urlMatch)){
                    angular.forEach(routerConfig.urlMatch, function (urlMatch, key) {
                        if(urlMatch.length === 2){
                            $urlRouterProvider.when(urlMatch[0], urlMatch[1]);
                        } else if(urlMatch.length === 1){
                            $urlRouterProvider.otherwise(urlMatch[0]);
                        }
                    });
                }
            }]);

            /**
             * 判断用户传入配置是否有效
             */
            function isConfigArrayLike(config){
                return angular.isArray(config) && config.length > 0;
            }
        };
        // 返回更新后的module
        return module;
    };


    // 生成一个异步注册angularJS组件的方法
    lazy.register = function (registrationMethod) {
        /**
         * @param(String) name 注册angularJS组件的名称
         * @param(Array|function) constructor 注册组件的构建函数
         * @returns(module) module返回对应的angularJS模块
         */
        return function (name, constructor) {
            registrationMethod(name, constructor);
        };
    };

    // 解析用户传入的state，为了方便使用，对ui.router的state做了进一步封装
    // 用户只需传入依赖的文件路径(srcipts属性) 即可自动完成文件的异步加载
    lazy.parseConfig = function (stateConfig) {
        if(!stateConfig.scripts){
            return stateConfig;
        }
        stateConfig.resolve = stateConfig.resolve || {};
        stateConfig.resolve.deps = function ($q, $rootScope) {
            return $q.all([
                laod(stateConfig.scripts['directives'] || null),
                laod(stateConfig.scripts['controllers'] || null),
                laod(stateConfig.scripts['services'] || null),
                laod(stateConfig.scripts['factories'] || null),
                laod(stateConfig.scripts['js'] || null)
            ]);
            function load(url){
                var deferred = $q.defer();
                if(url === null){
                    deferred.resolve();
                    return deferred.promise;
                }
                // 加载文件
                require(url, function () {
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            };
        };
        return stateConfig;
    }
    // 返回加载模块
    return lazy;
});