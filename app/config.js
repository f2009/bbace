/**
 * require.main
 */

//移动终端资源
var mobileResConfig = {};
if('ontouchstart' in document.documentElement){
    mobileResConfig.paths['jquery'] = 'assets/js/jquery.js';
    mobileResConfig.paths['jquery.mobile'] = 'assets/js/jquery.mobile.custom';
    mobileResConfig.shim['jquery.mobile'] = ['jquery'];
}

requirejs.config({
    //相对地址
    baseUrl: './',

    //加载依赖
    deps: [
        'jquery', 'jquery.ui.touch', 'jquery.bootstrap', 'jquery.ui',
        'ace.extra', 'ace', 'ace.elements'
    ],

    //indexUrl: baseUrl+'/index',

    paths: {

        <!--ace:framework:start-->
        'ace': 'assets/js/ace',
        'ace.elements': 'assets/js/ace-elements',
        'ace.extra': 'assets/js/ace-extra',
        <!--ace:framework:end-->

        <!--ace:libs:start-->
        'jquery': 'assets/js/jquery1x',
        'underscore': 'libs/underscore-1.8.3',
        <!--ace:libs:end-->

        <!--ace:mvc:start-->
        'backbone': 'libs/backbone-1.2.1',
        'backbone.marionette': 'libs/backbone.marionette-2.4.1',
        'backbone.localStorage': 'libs/backbone.localStorage-1.1.0',
        <!--ace:mvc:end-->

        <!--jquery:plugins:start-->
        'jquery.ui': 'assets/js/jquery-ui.custom',
        'jquery.ui.touch': 'assets/js/jquery.ui.touch-punch',
        'jquery.bootstrap': 'assets/js/bootstrap',
        'jquery.easypiechart': 'assets/js/jquery.easypiechart',
        'jquery.sparkline': 'assets/js/jquery.sparkline',
        'jquery.flot': 'assets/js/jquery.flot',
        'jquery.flot.pie': 'assets/js/jquery.flot.pie',
        'jquery.flot.resize': 'assets/js/jquery.flot.resize',
        <!--jquery:plugins:end-->

    },

    shim: {
        'backbone': ['underscore', 'jquery'],
        'backbone.marionette': ['backbone'],
        'backbone.localStorage': ['backbone'],
        'jquery.ui': ['jquery'],
        'jquery.ui.touch': ['jquery'],
        'jquery.bootstrap': ['jquery'],
        'jquery.easypiechart': ['jquery'],
        'jquery.sparkline': ['jquery'],
        'jquery.flot': ['jquery'],
        'jquery.flot.pie': ['jquery'],
        'jquery.flot.resize': ['jquery'],

        'ace.elements'          : ['jquery'],
        'ace'                   : ['jquery', 'jquery.ui']
    }
});

//开启App
(function(global){
    console.log("app start!");

    /*require(['app/main'], function(App){
        console.log("App start!");
    });*/
})(this);
