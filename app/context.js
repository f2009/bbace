/**
 * @class Context
 */
define([
    'menus', 'permission'
], function(menus, pmObj) {

    // 检测全局上下文对象Ctx是否存在
    // 防止多次声明
    if(typeof Ctx === 'undefined') {
        var Ctx = window.Ctx = {};
    }

    // 权限MAP
    var _permissionMap,
        _userModel;

    // 建立用户模型
    var buildUserModel = function(userData) {
        return new Backbone.Model({
            defaults: userData,
            getUserId: function() {
                return this.defaults.id;
            }
        });
    };

    // 映射权限码
    var convert2PermissionMap = function (data) {
        var ret = {}, code;
        _.each(data, function (item) {
            code = $.trim(item.code);
            code && (ret[code] = true);
        });
        return ret;
    };

    // Fetch数据
    // 拉取系统初始化信息
    var fetchSysInfo = function() {
        return $.ajax({
            type: 'GET',
            url: 'data/sysInfo.json',
            dataType: 'json'
        });
    };

    /**
     * 初始化上下文
     * @param callback
     * @returns ajaxDefer
     */
    Ctx._init = function(callback) {
        var sysInfoDeferred = fetchSysInfo();

        var _userInfo;

        sysInfoDeferred.done(function(resp) {
            _userInfo = resp;
            _permissionMap = convert2PermissionMap(resp.auths);
            _userModel = buildUserModel(resp.user);
        });

        return $.when(sysInfoDeferred).done(function () {
            callback && callback.call(Ctx, _userInfo);
        });
    };

    /**
     * 权限码校验
     * @param rsId 权限码
     * @returns Boolean
     */
    Ctx.avail = function (rsId) {
        return pmObj.has(rsId, _permissionMap);
    };

    return Ctx;
});