/**
 * 顶部工具条
 */
define([
    'backbone.marionette',
    'tpl!app/home/templates/footer.tpl'
], function(Marionette, footerTpl) {

    return Marionette.ItemView.extend({
        template: _.template(footerTpl),
        className: 'app-home-footer',
        onRender: function(){
            console.log("footer has been rendered!");
        }
    })

});