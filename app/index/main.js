define([
    'tpl!app/index/templates/main.tpl'
], function(mainTpl){

    return Marionette.ItemView.extend({
        template: _.template(mainTpl),

        className: 'app-page-index',

        ui: {

        },

        onRender: function() {
            console.log("index done!");
        }
    })
});