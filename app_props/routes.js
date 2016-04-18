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
            console.log("route...", path, view, action);

            // 检测是否是一个有效的路径
            if(!path) return;

            // 解析path
            path = path.replace(/-/g, '/');

            path = view? 'app/'+path+'/'+view : 'app/'+path+'/main';

            // 默认加载main.js
            // 如果不存在的话则直接加载path地址
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

    return Marionette.AppRouter.extend({
        // Backbone原始方法
        execute: function(callback, args) {
            /*args.push(parseQueryString(args.pop()));*/
            if (callback) callback.apply(this, args);

            console.log("Router execute:", callback, args);
        },

        // 路由方法
        controller: routerCtrl,

        // 路由配置
        appRoutes: {
            'index': 'routeToIndex', // 匹配默认首页
            //'page/:path(/:view)(/:action)': 'routeToPage' // 匹配菜单页面
            'page?link=:path&view=:view': 'routeToPage' // 匹配菜单页面 )(&action=:action)
        },

        // Backbone路由
        routes: {},

        // 监听路由
        onRoute: function(routeMethod, routePath, routeParams) {
            console.log("on route:", routeMethod, routePath, routeParams);

        }
    });

});
