/**
 * 左侧树形菜单
 */
define([
    'backbone.marionette',
    'menus',
    'tpl!app/home/templates/menus.tpl'
], function(Marionette, menus, menusTpl) {
    var menusFn = _.template(menusTpl);

    return Marionette.ItemView.extend({
        template: menusFn,
        tagName: 'ul',
        className: 'nav nav-list',
        events: {
            'click a[data-trigger]': 'navigate'
        },
        navigate: function(e){
            this.trigger('navigate:to', e);
        },
        serializeData: function(){
            return {
                menusFn: menusFn,
                menus: menus
            };
        }
    })

});