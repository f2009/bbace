/**
 * User hefeng
 * Date 2016/4/9
 */
define(function() {
    /**
     * AppRouter控制器
     */
    var RouterCtrl = Marionette.Controller.extend({
        /**
         * 路由到页面
         * @param {String} path 这是一个相对于app目录的地址，如home/xxxx。默认跳转到main.js
         * @param {String} view 自定义模块名字
         * @param {String} action 执行的动作
         */
        routeToPage: function(path, view, action) {
            // console.log("route...", path, view, action);

            // 检测是否是一个有效的路径
            if(!path) return;

            // 解析path
            path = path.replace(/-/g, '/');

            // 默认加载main.js
            // 如果不存在的话则直接加载path地址
            path = 'app/'+path+'/'+(view||'main');

            require([path], function(View) {
                App.show(new View);
            });

        },

        /**
         * 路由到默认首页
         */
        routeToIndex: function() {
            var _path = ['app/index/main'];

            require(_path, function(View) {
                App.show(new View);
            });
        }
    });

    var routerCtrl = new RouterCtrl;

    var parseQueryString = function(path) {
        var pathArr = path.split('&');
        var pathObjArr = [];

        for(var i=0; i<pathArr.length; i++) {
            var _path = pathArr[i];
            var _pathArr = _path.split('=');
            var obj = {
                key: _pathArr[0],
                value: _pathArr[1]
            };

            pathObjArr.push(obj);
            pathArr[i] = obj.value;
        }

        return pathArr;
    };

    return Marionette.AppRouter.extend({
        // Backbone原始方法
        execute: function(callback, args) {
            if (callback) {
                callback.apply(this, parseQueryString(args[0]));
            }
        },

        // 路由方法
        controller: routerCtrl,

        // 路由配置
        appRoutes: {
            'index': 'routeToIndex', // 匹配默认首页
            //'page/:path(/:view)(/:action)': 'routeToPage' // 匹配菜单页面
            'page?*path': 'routeToPage' // 匹配菜单页面 )(&action=:action)
        },

        // Backbone路由
        routes: {},

        // 监听路由
        onRoute: function(routeMethod, routePath, routeParams) {
            // console.log("on route:", routeMethod, routePath, routeParams);
        }
    });

});
