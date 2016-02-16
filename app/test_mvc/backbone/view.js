define([
    'tpl!app/test_mvc/backbone/templates/page.tpl'
], function(pageTpl){

    return Marionette.ItemView.extend({
        template: _.template(pageTpl),
        className: 'app-test-page-backbone',
        ui: {
            changeColor: '#test_change_color',
            btnChangeColor: '#btn_test_change_color'
        },
        events: {
            'click @ui.btnChangeColor': 'changeColor'
        },
        changeColor: function(){
            this.sidebar.promptColor();
        },
        onRender: function(){
            var that = this, ui = that.ui;

            var Sidebar = Backbone.Model.extend({
                promptColor: function() {
                    var cssColor = prompt("Please enter a CSS color:");
                    this.set({color: cssColor});
                }
            });

            var sidebar = that.sidebar = new Sidebar;

            sidebar.on('change:color', function(model, color) {
                ui.changeColor.css({background: color});
            });

            sidebar.set({color: 'red'});
        }
    })
});