/**
 * 左侧树形菜单
 */
define([
    'app/home/menus',
    'tpl!app/home/templates/sidebar.tpl'
], function(Menus, sidebarTpl) {

    return Marionette.LayoutView.extend({
        // 模板
        template: _.template(sidebarTpl),

        // 模板类
        className: 'app-sidebar',

        // regions
        regions: {
            menusContainer: '#sidebar_menus'
        },

        // 初始化
        onRender: function(){
            this.showChildView('menusContainer', new Menus());
        }
    })

});