define([
    'backbone.marionette',
    'tpl!app/test/templates/test.tpl'
], function(Marionette, testTpl){
    return Marionette.ItemView.extend({
        template: _.template(testTpl),
        className: 'app-test-page',
        onRender: function(){
            console.log("test page rendered!");
            console.info(testTpl, this.el);
        }
    })
});