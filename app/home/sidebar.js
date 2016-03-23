/**
 * 左侧树形菜单
 */
define([
    'backbone.marionette',
    'app/home/menus',
    'tpl!app/home/templates/sidebar.tpl'
], function(Marionette, Menus, sidebarTpl) {

    return Marionette.ItemView.extend({
        // 模板
        template: _.template(sidebarTpl),

        // 模板类
        className: 'app-home-sidebar',

        // UI对象(jQuery)
        ui: {
            menusContainer: '#sidebar-menus'
        },

        // 初始化
        onRender: function(){
            var that = this, ui = that.ui;
            var menus = new Menus().render();

            menus.on('navigate:to', function(e){
                var $target = $(e.currentTarget);
                var trigger = $target.attr('data-trigger');
                var deps = $target.attr('data-deps');

                require([deps], function(){
                    App.trigger(trigger, {test:"yes"});
                });
            });

            ui.menusContainer.append(menus.$el);
        }
    })

});