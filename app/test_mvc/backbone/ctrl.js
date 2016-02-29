/**
 * do test
 */
define([
    'backbone.marionette'
], function(Marionette){
    var Controller = Marionette.Controller.extend({
        init: function(options){
            require(['app/test_mvc/backbone/view'], function(View){
                App.show(new View);
            })
        }
    });

    var ctrl = new Controller;

    App.on('mvc:backbone:model', function(options){
        ctrl.init(options);
    });

    return ctrl;
});