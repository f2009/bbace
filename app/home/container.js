/**
 * 顶部工具条
 */
define([
    'tpl!app/home/templates/container.tpl'
], function(containerTpl) {

    return Marionette.ItemView.extend({
        template: _.template(containerTpl),

        className: 'app-container'
    })

});