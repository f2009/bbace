/**
 * home controller
 */
define(function(require, exports, module) {
    var View = require('app/home/view');
    var SidebarView = require('app/home/sidebar');
    var NavbarView = require('app/home/navbar');

    var homePageView = new View().render();
    var sidebarView = new SidebarView().render();
    var navbarView = new NavbarView().render();

    return {
        init: function(){
            $(".page-container").append(homePageView.$el);
        }
    }

});
