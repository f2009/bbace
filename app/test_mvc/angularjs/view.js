define([
    'tpl!./templates/page.tpl'
], function(pageTpl){

    return Marionette.ItemView.extend({
        template: _.template(pageTpl),
        className: 'app-test-page-angularjs',

        ui: {
            changeColor: '#test_change_color',
            pageContainer: '#test_page_container',
            btnChangeColor: '#btn_test_change_color',
            btnBindAll: '#btn_test_bindAll'
        },

        onRender: function() {
            var that = this,
                ui = that.ui;

            ui.pageContainer.html("angularjs");
        }
    })
});