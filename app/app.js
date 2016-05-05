/**
 * App
 * APP.util
 * App.factory
 * App.ui
 */
define([
    'app/context',
    'app/home/main',
    'app/home/tab',
    'ace.onReady'
], function(Ctx, HomeMain, TabView, AceReady) {

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

    var contentView = new TabView();

    // 显示视图
    App.show = function(view) {
        document.body.scrollTop=0;
        contentView.addTabContent(view);
    };

    App.canRepeatShow = function (view, options) {
        document.body.scrollTop=0;
        return contentView.addTabContentCanRepeat(view, options);
    };

    App.closeTabViewById = function (id) {
        document.body.scrollTop=0;
        contentView.closeTabViewById(id);
    };

    App.maskCurTab = function () {
        //Opf.UI.setLoading('#page-body');
    };

    App.getCurTabPaneEl = function () {
        // return $('#page-body');
        return contentView.getNowActiveTab();
    };

    App.unMaskCurTab = function () {
        //Opf.UI.setLoading('#page-body', false);
    };

    App._init = function() {
        // 实例化home layout
        var homeLayoutView = new HomeMain();

        App.addRegions(homeLayoutView.getRegions());

        // 生成首页视图
        App.getRegion('appContainer').show(homeLayoutView);

        // 返回contentLayout
        App.addRegions(homeLayoutView.contentLayoutView.getRegions());

        // 生成TAB视图
        App.getRegion('pageContainer').show(contentView);
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
