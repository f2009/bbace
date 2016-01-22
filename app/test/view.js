define([
    'tpl!app/test/templates/test.tpl'
], function(testTpl){
    return Marionette.ItemView.extend({
        template: _.template(testTpl),
        className: 'app-test-page',
        onRender: function(){

        }
    })
});