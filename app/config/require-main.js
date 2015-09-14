/**
 * require.main
 */
requirejs.config({
    baseUrl: './',
    //indexUrl: baseUrl+'/index',
    paths: {
        'jquery': 'libs/jquery-1.8.3.min',
        'underscore': 'libs/underscore-1.8.3',
        'backbone': 'libs/backbone-1.2.1',
        'backbone.marionette': 'libs/backbone.marionette-2.4.1',
        'backbone.localStorage': 'libs/backbone.localStorage-1.1.0'
    },
    shim: {
        'backbone': ['underscore', 'jquery'],
        'backbone.marionette': ['backbone'],
        'backbone.localStorage': ['backbone']
    }
});

$(function(){
    require(['app/main'], function(App){
        console.log("App start!");
    });
});
