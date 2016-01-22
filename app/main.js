/**
 * 应用入口
 */

//移动终端资源
/*var mobileResConfig = {};
if('ontouchstart' in document.documentElement){
    mobileResConfig.paths['jquery'] = 'assets/js/jquery.js';
    mobileResConfig.paths['jquery.mobile'] = 'assets/js/jquery.mobile.custom';
    mobileResConfig.shim['jquery.mobile'] = ['jquery'];
}*/

requirejs.config({
    //相对地址
    baseUrl: './',

    //预加载
    deps: [
        'jquery', 'jquery.ui.touch-punch', 'jquery.bootstrap', 'jquery.ui',
        'ace', 'ace-elements'
    ],

    //模块路径
    paths: {
        <!--thirdparty:libs:start-->
        'json2': 'libs/json2',
        'jquery': 'assets/js/jquery1x',
        'underscore': 'libs/underscore-1.8.3',
        <!--thirdparty:libs:end-->

        <!--thirdparty:ace:start-->
        'ace': 'assets/js/ace',
        'ace-elements': 'assets/js/ace-elements',
        'ace-extra': 'assets/js/ace-extra',
        <!--thirdparty:ace:end-->

        <!--ace:mvc:start-->
        'backbone': 'libs/backbone-1.2.1',
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
        'jquery.ui': 'assets/js/jquery-ui.custom',
        'jquery.ui.touch-punch': 'assets/js/jquery.ui.touch-punch',
        'jquery.bootstrap': 'assets/js/bootstrap',
        'jquery.easypiechart': 'assets/js/jquery.easypiechart',
        'jquery.sparkline': 'assets/js/jquery.sparkline',
        'jquery.flot': 'assets/js/flot/jquery.flot',
        'jquery.flot.pie': 'assets/js/flot/jquery.flot.pie',
        'jquery.flot.resize': 'assets/js/flot/jquery.flot.resize',
        <!--jquery:plugins:end-->
    },

    //配置模块加载顺序以及依赖关系
    shim: {
        'backbone': ['underscore', 'jquery'],
        'backbone.marionette': ['backbone'],
        'backbone.localStorage': ['backbone'],

        'jquery.ui': ['jquery'],
        'jquery.ui.touch-punch': ['jquery'],
        'jquery.bootstrap': ['jquery'],
        'jquery.easypiechart': ['jquery'],
        'jquery.sparkline': ['jquery'],
        'jquery.flot': ['jquery'],
        'jquery.flot.pie': ['jquery'],
        'jquery.flot.resize': ['jquery'],

        'ace': ['jquery', 'jquery.bootstrap'],
        'ace-elements': ['ace', 'jquery.ui']
    }
});

//处理IE调试信息
var console = window.console ? window.console : {
    log: function() {},
    info: function() {},
    warn: function() {},
    error: function() {}
};

//声明全局对象
var App;


//初始化首页
require([
    'app/context',
    'app/home/ctrl'
], function(Ctx, HomeCtrl){

    var $body = $('body');
    console.info($body);
    
    App = Ctx;
    App.module('ctx').load(function(data){
        var homeCtrl = new HomeCtrl(data);
    });
});
