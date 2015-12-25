/**
 * 顶部工具条
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/navbar.tpl'
], function(Marionette, navbarTpl) {

    return Marionette.ItemView.extend({
        template: navbarTpl,
        className: 'app-home-navbar',
        onRender: function(){
            console.log("navbar has been rendered!");
        }
    })

});