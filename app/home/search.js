/**
 * User hefeng
 * Date 2016/4/15
 */
define(function() {
    var searchTpl = '';
        searchTpl += '<span class="input-icon">';
        searchTpl += '<input type="text" placeholder="搜索菜单 ..." class="nav-search-input" id="nav_search_input" autocomplete="off" style="width:172px;" />';
        searchTpl += '<i class="ace-icon fa fa-search nav-search-icon"></i>';
        searchTpl += '</span>';

    return Marionette.ItemView.extend({
        template: _.template(searchTpl),

        tagName: 'form',

        className: 'form-search',

        ui: {
            searchIpt: '#nav_search_input'
        },

        events: {
            'change @ui.searchIpt': 'onSearch'
        },

        onSearch: function() {
            this.triggerMethod('menus:query', this.ui.searchIpt.val());
        }
    })
});
