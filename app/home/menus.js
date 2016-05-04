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

        events: {
            'click a[data-trigger]': 'navigate'
        },

        navigate: function(e){
            this.triggerMethod('navigate:to', e);
        },

        onNavigateTo: function(e) {
            var $target = $(e.currentTarget);
            var trigger = $target.attr('data-trigger');
            var deps = $target.attr('data-deps');

            this.handleMenu(e);

            require([deps], function(){
                App.trigger(trigger, {test:"yes"});
            });
        },

        serializeData: function(){
            return {
                menusFn: menusFn,
                menus: menus
            };
        },

        handleMenu: function (e) {
            var $linkEl = $(e.target).closest('a');
            //移除上次高亮
            if(this._lastActiveLinkEl) {
                this._eachClosetMenuItemToggleClass(this._lastActiveLinkEl, 'active', false);
            }
            //高亮这次
            this._eachClosetMenuItemToggleClass($linkEl, 'active', true);
            this._lastActiveLinkEl = $linkEl.get(0);
        },

        _eachClosetMenuItemToggleClass: function (fromEl, cls, toggle) {
            this._eachClosetMenuItem(fromEl, function (el) {
                $(el).toggleClass(cls, !!toggle);
            });
        },

        _eachClosetMenuItem: function (linkEl, cb) {

            function getParent (el) {
                var $ul = $(el).closest('ul.submenu');
                if($ul.length) {
                    return $ul.closest('li');
                }
            }

            var $li = $(linkEl).closest('li');

            while($li && $li.length) {
                cb($li);
                $li = getParent($li);
            }

        }

    })

});