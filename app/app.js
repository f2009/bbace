/**
 * App
 * APP.util
 * App.factory
 * App.ui
 */
define([
    'routes',
    'app/home/ctrl',
    'app/context'
], function(Routes, HomeCtrl) {

    // 检测全局对象App是否存在
    // 防止多次声明
    if(typeof App === 'undefined') {
        var App = window.App = new Marionette.Application();
    }

    App._init = function(data) {
        //require(['app/home/ctrl'], function(HomeCtrl){
            var homeCtrl = new HomeCtrl(data);

            // regionManager
            var regionManager = App.regionManager = new Marionette.RegionManager({
                regions: {
                    "container": ".page-container"
                }
            });

            // 显示视图
            App.show = function(view) {
                regionManager.get('container').show(view);
            };

        //});
    };

    var contextDeferred = Ctx._init(App._init);

    //app: start
    App.on('start', function() {

        // 初始化上下文
        contextDeferred.done(function() {

            App.routes.navigate('#/index');

            console.log("context done!");
        });

        // 初始化路由
        var appRoutes = App.routes = new Routes();

        // 启用hash
        Backbone.history.start();

        // 启动首个应用


        console.log("===================App start===================");
    });


    return App;
});
