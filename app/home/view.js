/**
 * home view
 */
define([
    'backbone.marionette',
    'app/home/navbar',
    'app/home/sidebar',
    'app/home/container',
    'app/home/footer',
    'tpl!app/home/templates/page.tpl'
], function(Marionette, NavbarView, SidebarView, ContainerView, FooterView, pageTpl) {

    return Marionette.ItemView.extend({
        template: _.template(pageTpl),
        className: 'app-home',
        ui: {
            navbarContainer: '#navbar',
            sidebarContainer: '#sidebar',
            mainContainer: '#main',
            footerContainer: '#footer'
        },
        initialize: function(options){
            this.user = options.user;
            this.auths = options.auths;
        },
        onRender: function(){
            var that = this,
                ui = that.ui,
                $el = that.$el;

            var navbarView = new NavbarView({ user:that.user }).render();
            var sidebarView = new SidebarView({ auths: that.auths }).render();
            var containerView = new ContainerView().render();
            var footerView = new FooterView().render();

            ui.navbarContainer.append(navbarView.$el);
            ui.sidebarContainer.append(sidebarView.$el);
            ui.mainContainer.append(containerView.$el);
            ui.footerContainer.append(footerView.$el);

            $("body").prepend($el);
        }
    });

});
