/**
 * 左侧树形菜单
 */
define([
    'app/home/search',
    'app/home/menus',
    'tpl!app/home/templates/sidebar.tpl'
], function(SearchView, Menus, sidebarTpl) {
    var menuSelected = function($cur) {
        var $linkEl = $cur.closest('a');
        //移除上次高亮
        if(this._lastActiveLinkEl) {
            this._eachClosetMenuItemToggleClass(this._lastActiveLinkEl, 'active', false);
        }
        //高亮这次
        this._eachClosetMenuItemToggleClass($linkEl, 'active', true);
        this._lastActiveLinkEl = $linkEl.get(0);
    };

    return Marionette.LayoutView.extend({
        // 模板
        template: _.template(sidebarTpl),

        // 模板类
        className: 'app-sidebar',

        // regions
        regions: {
            searchContainer: '#nav_search',
            menusContainer: '#sidebar_menus'
        },

        onNavigateTo: function ($cur) {
            var $linkEl = $cur.closest('a');
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

        },


        childEvents: {
            'menus:query': function(searchView, val) {
                var $menusContainer = this.getRegion('menusContainer').$el;
                var list = $menusContainer.find('span.menu-text');
                var queryReg = new RegExp(val, 'ig');
                var that = this;

                $.each(list, function(k, v) {
                    var $self = $(this),
                        text = $self.text();

                    if(queryReg.test(text)) {
                        console.log("query done", text);
                        that.onNavigateTo($self);
                    }
                })
            }
        },

        // 初始化
        onRender: function(){
            this.showChildView('searchContainer', new SearchView());
            this.showChildView('menusContainer', new Menus());
        }
    })

});