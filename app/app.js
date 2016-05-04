/**
 * App
 * APP.util
 * App.factory
 * App.ui
 */
define([
    'app/context',
    'app/home/main',
    'ace.onReady'
], function(Ctx, HomeMain, AceReady) {

    // 检测全局对象App是否存在
    // 防止多次声明
    if(typeof App === 'undefined') {
        var App = window.App = new Marionette.Application({
            /**
             * regions object
             * ==== region list ====
             * appContainer[.app-container]
             * navbarContainer[#navbar]
             * sidebarContainer[#sidebar]
             * mainContainer[#main]
             * pageContainer[.page-content]
             */
            regions: {
                "appContainer": "body>div.app-container"
            }
        });
    }

    // 显示视图
    App.show = function(view) {
        App.getRegion('pageContainer').show(view);
    };

    App._init = function() {
        // 实例化home layout
        var homeLayoutView = new HomeMain();

        App.addRegions(homeLayoutView.getRegions());

        // 生成首页视图
        App.getRegion('appContainer').show(homeLayoutView);

        App.addRegions(homeLayoutView.contentLayoutView.getRegions());
    };

    var contextDeferred = Ctx._init(App._init);

    //app: start
    App.on('start', function() {
        // 初始化上下文
        contextDeferred.done(function() {
            // Ace Ready
            // 这里用的是第三方Ace开源框架
            // 我们也可以配置自己的基础页面框架
            AceReady.basics();
            AceReady.enableSidebar();
            AceReady.handleScrollbars();
            AceReady.dropdownAutoPos();
            //AceReady.navbarHelpers();
            //AceReady.bsCollapseToggle();
            AceReady.sidebarTooltips();
            AceReady.scrollTopBtn();
            AceReady.someBrowserFix();
            AceReady.smallDeviceDropdowns();

            console.log("context done!");
        });

        console.log("===================App start===================");
    });


    return App;
});
