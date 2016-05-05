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

// 框架URL
var FWK_URL = 'vendor/ace-1.3.3/assets/';

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
        'underscore': 'libs/underscore-1.8.3',
        <!--thirdparty:libs:end-->

        'jquery': [
            '//cdn.bootcss.com/jquery/1.12.0/jquery',
            FWK_URL + 'js/jquery1x'
        ],

        <!--thirdparty:ace:start-->
        'ace': FWK_URL + 'js/ace',
        'ace-elements': FWK_URL + 'js/ace-elements',
        //'ace-extra': FWK_URL + 'js/ace-extra',
        <!--thirdparty:ace:end-->

        <!--ace:mvc:start-->
        'backbone': [
            CDN_URL + 'libs/backbone.js/1.1.2/backbone',
            'libs/backbone-1.2.1'
        ],
        'backbone.marionette': 'libs/backbone.marionette-2.4.1',
        'backbone.localStorage': 'libs/backbone.localStorage-1.1.0',
        <!--ace:mvc:end-->

        <!--requirejs:plugins:start-->
        'tpl': 'libs/require.text-2.0.14',
        'cs': 'libs/require.cs-0.5.0', //CoffeeScript
        <!--requirejs:plugins:end-->

        <!--jquery:plugins:start-->
        'jquery.ui': FWK_URL + 'js/jquery-ui.custom',
        'jquery.ui.touch-punch': FWK_URL + 'js/jquery.ui.touch-punch',
        'jquery.bootstrap': FWK_URL + 'js/bootstrap',
        'jquery.easypiechart': FWK_URL + 'js/jquery.easypiechart',
        'jquery.sparkline': FWK_URL + 'js/jquery.sparkline',
        'jquery.flot': FWK_URL + 'js/flot/jquery.flot',
        'jquery.flot.pie': FWK_URL + 'js/flot/jquery.flot.pie',
        'jquery.flot.resize': FWK_URL + 'js/flot/jquery.flot.resize',
        <!--jquery:plugins:end-->

        //plugins:extend:start
        'i18n': 'app_res/js/i18n.extend',
        'i18n.origin': 'libs/require.i18n-2.0.6',
        <!--plugins:extend:end-->
    },

    //配置模块加载顺序以及依赖关系
    shim: {
        //'i18n': ['i18n.origin'],

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

    config: {
        i18n: {
            locale: 'zh-CN'
        }
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
