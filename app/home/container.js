/**
 * 顶部工具条
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/container.tpl'
], function(Marionette, containerTpl) {

    return Marionette.ItemView.extend({
        template: _.template(containerTpl),
        className: 'app-home-container',
        onRender: function(){
            console.log("container has been rendered!");
        }
    })

});