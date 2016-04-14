/**
 * 左侧树形菜单
 */
define([
    'menus',
    'tpl!app/home/templates/menus.tpl'
], function(menus, menusTpl) {
    var menusFn = _.template(menusTpl);

    return Marionette.ItemView.extend({
        template: menusFn,
        tagName: 'ul',
        className: 'nav nav-list',

        serializeData: function(){
            return {
                menusFn: menusFn,
                menus: menus
            };
        }
    })

});