/**
 * App
 * App.ctx
 * APP.util
 * App.factory
 * App.ui
 */
define([
    'backbone.marionette'
], function(Marionette){
    var App = window.App = new Marionette.Application();

    require(['app/context', 'app/home/ctrl'], function(Ctx, HomeCtrl){
        Ctx.load(function(data){
            var homeCtrl = new HomeCtrl(data);

            //regionManager.get('aRegion').show(new MyView, options);
            App.regionManager = new Marionette.RegionManager({
                regions: {
                    "container": ".page-container"
                }
            });

        });
    });

    //app: start
    App.on('start', function() {
        console.log("App started.");
    });

    return App;
});
