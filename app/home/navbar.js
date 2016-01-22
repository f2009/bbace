/**
 * 顶部工具条
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/navbar.tpl'
], function(Marionette, navbarTpl) {

    return Marionette.ItemView.extend({
        template: _.template(navbarTpl),
        className: 'app-home-navbar',
        initialize: function(options){
            this.data = options;
        },
        serializeData: function(){
            return this.data;
        },
        onRender: function(){
            console.log("navbar has been rendered!");
        }
    })

});