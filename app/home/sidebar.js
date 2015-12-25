/**
 * 左侧树形菜单
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/sidebar.tpl'
], function(Marionette, sidebarTpl) {

    return Marionette.ItemView.extend({
        template: sidebarTpl,
        className: 'app-home-sidebar',
        onRender: function(){
            console.log("sidebar has been rendered!");
        }
    })

});