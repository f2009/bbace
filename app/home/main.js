/**
 * home view
 */
define([
    'tpl!app/home/templates/main.tpl',
    'app/home/navbar',
    'app/home/sidebar',
    'app/home/content',
    'app/home/footer'
], function(mainTpl, NavbarView, SidebarView, ContentView, FooterView) {

    return Marionette.LayoutView.extend({
        template: _.template(mainTpl),

        className: 'app-home',

        regions: {
            navbarContainer: '#navbar',
            sidebarContainer: '#sidebar',
            mainContainer: '#main',
            footerContainer: '#footer'
        },

        onRender: function(){
            this.showChildView('navbarContainer', new NavbarView());
            this.showChildView('sidebarContainer', new SidebarView());
            this.showChildView('mainContainer', this.contentLayoutView = new ContentView());
            this.showChildView('footerContainer', new FooterView());

            console.log("home layout done!");
        }
    });

});
