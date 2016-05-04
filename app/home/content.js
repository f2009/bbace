/**
 * 顶部工具条
 */
define([
    'tpl!app/home/templates/content.tpl'
], function(contentTpl) {

    return Marionette.LayoutView.extend({
        template: _.template(contentTpl),

        className: 'main-content-inner',

        regions: {
            pageContainer: '.page-content'
        },

        onRender: function() {
            console.log("page done!");
        }
    })

});