/**
 * home controller
 */
define([
    'app/home/view',
    'app/home/navbar',
    'app/home/sidebar',
    'app/home/container',
    'app/home/footer',
    'app/ace.onReady'
], function(View, NavbarView, SidebarView, ContainerView, FooterView, aceReady) {
    var navbarView = new NavbarView().render();
    var sidebarView = new SidebarView().render();
    var containerView = new ContainerView().render();
    var footerView = new FooterView().render();

    var homeView = new View().render();
    var homeUI = homeView.ui;
        homeUI.navbarContainer.append(navbarView.$el);
        homeUI.sidebarContainer.append(sidebarView.$el);
        homeUI.mainContainer.append(containerView.$el);
        homeUI.footerContainer.append(footerView.$el);

    return {
        init: function(){
            console.log("home page init.");
            aceReady.basics();
            aceReady.enableSidebar();
            aceReady.handleScrollbars();
            aceReady.dropdownAutoPos();
            aceReady.navbarHelpers();
            aceReady.bsCollapseToggle();
            aceReady.sidebarTooltips();
            aceReady.scrollTopBtn();
            aceReady.someBrowserFix();
            aceReady.smallDeviceDropdowns();
        }
    }

});
