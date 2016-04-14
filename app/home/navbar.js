/**
 * 顶部工具条
 */
define([
    'tpl!app/home/templates/navbar.tpl'
], function(navbarTpl) {
    var buildUserMsg = function(msgData) {
        return new Backbone.Model(msgData);
    };

    return Marionette.ItemView.extend({
        template: _.template(navbarTpl),

        className: 'app-navbar',

        initialize: function(){
            this._msgModel = buildUserMsg(Ctx.getUserMsg());
        },

        serializeData: function(){
            return {
                user: Ctx.getUser()
            };
        }
    })

});