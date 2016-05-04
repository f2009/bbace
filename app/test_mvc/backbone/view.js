define([
    'tpl!app/test_mvc/backbone/templates/page.tpl'
], function(pageTpl){

    return Marionette.ItemView.extend({
        template: _.template(pageTpl),
        className: 'app-test-page-backbone',
        ui: {
            changeColor: '#test_change_color',
            pageContainer: '#test_page_container',
            btnChangeColor: '#btn_test_change_color',
            btnBindAll: '#btn_test_bindAll'
        },
        events: {
            'click @ui.btnChangeColor': 'changeColor',
            'click @ui.btnBindAll': 'evtBindAll'
        },
        changeColor: function() {
            this.sidebar.promptColor();
        },
        evtBindAll: function() {
            // When the button is clicked, this.label will have the correct value.
            this.buttonView.onClickA();
        },

        onRender: function() {
            var that = this,
                ui = that.ui;

            /**
             * @class
             */
            var Sidebar = Backbone.Model.extend({
                promptColor: function() {
                    var cssColor = prompt("Please enter a CSS color:");
                    this.set({color: cssColor});
                }
            });

            var sidebar = that.sidebar = new Sidebar;

            // 当model的color属性发生改变的时候触发
            sidebar.on('change:color', function(model, color) {
                ui.changeColor.css({background: color});
            });

            sidebar.set({color: 'red'});

            // Events - bindAll
            var buttonView = that.buttonView = {
                label  : 'underscore',
                onClickA: function(){ alert('clicked: ' + this.label); },
                onHoverA: function(){ console.log('hovering: ' + this.label); }
            };

            _.bindAll(buttonView, 'onClickA', 'onHoverA');

            /**
             * @method
             * @param greeting
             * @param hello
             * @returns {string}
             * @desc bind是将一个function的执行上下文绑定到一个对象上，还可以接收多个参数
             */
            var funcBind = function(greeting, hello){ return greeting + hello + ': ' + this.name };

            funcBind = _.bind(funcBind, {name: 'moe'}, 'hi', 'bind event');
            console.log(funcBind()); // => hi bind event: moe
        }
    })
});