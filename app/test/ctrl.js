/**
 * do test
 */
define(['backbone.marionette'], function(Marionette){
    var Controller = Marionette.Controller.extend({
        init: function(options){
            alert("init..." + options.test);
        }
    });

    var ctrl = new Controller;

    App.on('test:do', function(options){
        ctrl.init(options);
    });

    return ctrl;
});