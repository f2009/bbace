/**
 * home view
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/page.tpl'
], function(Marionette, pageTpl) {

    return Marionette.ItemView.extend({
        template: _.template(pageTpl),
        className: 'app-home',
        ui: {
            navbarContainer: '#navbar',
            sidebarContainer: '#sidebar',
            mainContainer: '#main',
            footerContainer: '#footer'
        },
        onRender: function(){
            $("body").prepend(this.$el);
        }
    });

});
