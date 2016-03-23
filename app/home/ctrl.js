/**
 * home controller
 */
define([
    'app/home/view',
    'app/ace.onReady'
], function(HomeView, AceReady) {
    var aceReady = function(){
        AceReady.basics();
        AceReady.enableSidebar();
        AceReady.handleScrollbars();
        AceReady.dropdownAutoPos();
        AceReady.navbarHelpers();
        AceReady.bsCollapseToggle();
        AceReady.sidebarTooltips();
        AceReady.scrollTopBtn();
        AceReady.someBrowserFix();
        AceReady.smallDeviceDropdowns();
    };

    return Marionette.Object.extend({
        initialize: function(options){
            var data = this.data = options;
            new HomeView(data).render();
            aceReady();
        }
    });


});
