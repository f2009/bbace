/**
 * @class Context
 */
define([
    'app/permission'
], function(Permission) {
    var _permissionMap;

    function convert2PermissionMap (data) {
        var ret = {}, code;
        _.each(data.auths, function (item) {
            code = $.trim(item.code);
            code && (ret[code] = true);
        });
        return ret;
    }

    App.module('ctx', function(Ctx, App, Backbone, Marionette, $, _){
        Ctx.load = function(callback) {
            $.ajax({
                type: 'GET',
                url: 'data/sysInfo.json',
                dataType: 'json',
                success: function(resp){
                    _permissionMap = convert2PermissionMap(resp);
                    callback && callback.call(Ctx, resp);
                }
            });
        };

        Ctx.avail = function (rsId) {
            return Permission.has(rsId, _permissionMap);
        };
    });

    return App.module('ctx');
});