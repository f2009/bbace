/**
 * home view
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/homepage.tpl'
], function(Marionette, pageTpl) {

    return Marionette.ItemView.extend({
        template: pageTpl,
        className: 'app-home-view',
        onRender: function(){
            var NavbarView = require('app/home/navbar');
            var SidebarView = require('app/home/sidebar');
        }
    });

});
