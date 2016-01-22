/**
 * @class Context
 */
define([
    'backbone.marionette',
    'app/permission'
], function(Marionette, Permission) {

    var App = new Marionette.Application();

    var _permissionMap;

    function convert2PermissionMap (data) {
        var ret = {}, code;
        _.each(data.auths, function (item) {
            code = $.trim(item.code);
            code && (ret[code] = true);
        });
        return ret;
    }

    App.module('ctx', function(Self, App, Backbone, Marionette, $, _){
        Self.load = function(callback) {
            $.ajax({
                type: 'GET',
                url: 'data/sysInfo.json',
                dataType: 'json',
                success: function(resp){
                    _permissionMap = convert2PermissionMap(resp);
                    callback && callback.call(Self, resp);
                }
            });
        };

        Self.avail = function (rsId) {
            return Permission.has(rsId, _permissionMap);
        };
    });

    return App;
});