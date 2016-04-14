/**
 * App
 * APP.util
 * App.factory
 * App.ui
 */
define([
    'app/context',
    'app/home/main',
    'app/ace.onReady',
    'routes'
], function(Ctx, HomeMain, AceReady, Routes) {

    // 检测全局对象App是否存在
    // 防止多次声明
    if(typeof App === 'undefined') {
        var App = window.App = new Marionette.Application({
            regions: {
                "appContainer": "body>div.app-container"
            }
        });
    }

    // 显示视图
    App.show = function(view) {
        App.getRegion('mainContainer').show(view);
    };

    App._init = function() {
        // 实例化home layout
        var homeLayoutView = new HomeMain();

        App.addRegions(homeLayoutView.getRegions());

        // 生成首页视图
        App.getRegion('appContainer').show(homeLayoutView);
    };

    var contextDeferred = Ctx._init(App._init);

    //app: start
    App.on('start', function() {

        // 初始化上下文
        contextDeferred.done(function() {

            // App.routes.navigate('#/index');

            AceReady.basics();
            AceReady.enableSidebar();
            AceReady.handleScrollbars();
            AceReady.dropdownAutoPos();
            AceReady.navbarHelpers();
            AceReady.bsCollapseToggle();
            AceReady.sidebarTooltips();
            AceReady.scrollTopBtn();
            AceReady.someBrowserFix();
            AceReady.smallDeviceDropdowns();

            console.log("context done!");
        });

        // 初始化路由
        var appRoutes = App.routes = new Routes();

        // 启用hash
        Backbone.history.start();

        console.log("===================App start===================");
    });


    return App;
});
