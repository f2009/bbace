/**
 * 应用入口
 */

//处理IE调试信息
var console = window.console ? window.console : {
    log: function() {},
    info: function() {},
    warn: function() {},
    error: function() {}
};

// CDN地址
// 第三方开源插件
var CDN_URL = 'http://apps.bdimg.com/';

// 静态资源地址
// 框架资源以及相关依赖
var STATIC_URL = 'vendor/ace-1.3.3/';

// 配置requirejs
requirejs.config({
    //相对地址
    baseUrl: './',

    //预加载
    deps: [
        'jquery.ui', 'jquery.ui.touch-punch', 'jquery.bootstrap',
        'json2', 'backbone.marionette', 'ace', 'ace-elements'
    ],

    //模块路径
    paths: {
        <!--framework:properties:start-->
        'menus': 'app_props/menus',
        'routes': 'app_props/routes',
        'permission': 'app_props/permission',
        <!--framework:properties:end-->

        <!--thirdparty:libs:start-->
        'json2': 'libs/json2',
        //'jquery': 'http://cdn.bootcss.com/jquery/1.8.3/jquery.js', //STATIC_URL + 'assets/js/jquery1x',
        'underscore': 'libs/underscore-1.8.3',
        <!--thirdparty:libs:end-->

        'jquery': [
            '//cdn.bootcss.com/jquery/1.12.0/jquery',
            STATIC_URL + 'assets/js/jquery1x'
        ],

        <!--thirdparty:ace:start-->
        'ace': STATIC_URL + 'assets/js/ace',
        'ace-elements': STATIC_URL + 'assets/js/ace-elements',
        //'ace-extra': STATIC_URL + 'assets/js/ace-extra',
        <!--thirdparty:ace:end-->

        <!--ace:mvc:start-->
        'backbone': CDN_URL + 'libs/backbone.js/1.1.2/backbone-min', //'libs/backbone-1.2.1',
        'backbone.marionette': 'libs/backbone.marionette-2.4.1',
        'backbone.localStorage': 'libs/backbone.localStorage-1.1.0',
        <!--ace:mvc:end-->

        <!--requirejs:plugins:start-->
        'domReady': 'libs/require.domReady-2.0.1',
        'tpl': 'libs/require.text-2.0.14',
        'i18n': 'libs/require.i18n-2.0.6',
        'cs': 'libs/require.cs-0.5.0', //CoffeeScript
        <!--requirejs:plugins:end-->

        <!--jquery:plugins:start-->
        'jquery.ui': STATIC_URL + 'assets/js/jquery-ui.custom',
        'jquery.ui.touch-punch': STATIC_URL + 'assets/js/jquery.ui.touch-punch',
        'jquery.bootstrap': STATIC_URL + 'assets/js/bootstrap',
        'jquery.easypiechart': STATIC_URL + 'assets/js/jquery.easypiechart',
        'jquery.sparkline': STATIC_URL + 'assets/js/jquery.sparkline',
        'jquery.flot': STATIC_URL + 'assets/js/flot/jquery.flot',
        'jquery.flot.pie': STATIC_URL + 'assets/js/flot/jquery.flot.pie',
        'jquery.flot.resize': STATIC_URL + 'assets/js/flot/jquery.flot.resize',
        <!--jquery:plugins:end-->
    },

    //配置模块加载顺序以及依赖关系
    shim: {
        'backbone': ['underscore', 'jquery'],
        'backbone.marionette': ['backbone'],
        'backbone.localStorage': ['backbone'],

        'jquery.ui': ['jquery'],
        'jquery.ui.touch-punch': ['jquery.ui'],
        'jquery.bootstrap': ['jquery'],
        'jquery.easypiechart': ['jquery'],
        'jquery.sparkline': ['jquery'],
        'jquery.flot': ['jquery'],
        'jquery.flot.pie': ['jquery'],
        'jquery.flot.resize': ['jquery'],

        'ace': ['jquery.bootstrap', 'jquery.ui'],
        'ace-elements': ['ace']
    },

    // requirejs回调
    callback: function() {
        console.log("requirejs config done!");

        // 启动项目
        require(['app/app'],
            function(App) {
                App.start();
            }
        );
    }
});
