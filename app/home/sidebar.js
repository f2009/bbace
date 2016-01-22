/**
 * 左侧树形菜单
 */
define([
    'backbone.marionette',
    'app/home/menus',
    'tpl!app/home/templates/sidebar.tpl'
], function(Marionette, Menus, sidebarTpl) {

    return Marionette.ItemView.extend({
        template: _.template(sidebarTpl),
        className: 'app-home-sidebar',
        ui: {
            menusContainer: '#sidebar-menus'
        },
        onRender: function(){
            var that = this, ui = that.ui;
            var menus = new Menus().render();
            menus.on('navigate:to', function(e){
                var $target = $(e.currentTarget);
                var trigger = $target.attr('data-trigger');
                var deps = $target.attr('data-deps');
                require([deps], function(){
                    App.trigger(trigger, {test:"yes"});
                })
            });
            ui.menusContainer.append(menus.$el);
        }
    })

});