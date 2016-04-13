/**
 * do test
 */
define([
    'backbone.marionette'
], function(Marionette){
    var Controller = Marionette.Controller.extend({
        init: function(options){
            require(['./view'], function(View){
                App.show(new View);
            })
        }
    });

    return new Controller;
});