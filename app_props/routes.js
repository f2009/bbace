/**
 * User hefeng
 * Date 2016/4/9
 */
define(function() {
    var routerCtrl = {
        routeTo: function(path) {
            console.log("route...", path);

            if(!path) return;

            var routeTimeout = setTimeout(function() {
                if(_.isFunction(App.show)) {
                    clearTimeout(routeTimeout);
                    require(['app/'+path+'/main'], function(View) {
                        App.show(new View);
                    });
                }
            }, 50)

        },

        routeToIndex: function() {
            console.log("route to index");
        }
    };

    return Marionette.AppRouter.extend({
        // 路由方法
        controller: routerCtrl,

        // 路由配置
        appRoutes: {
            '/index': 'routeToIndex', // 匹配默认首页
            '*path': 'routeTo' // 匹配所有路径
        },

        // Backbone路由
        routes: {},

        // 监听路由
        onRoute: function(routeMethod, routePath, routeParams) {
            console.log("on route:", routeMethod, routePath, routeParams);

        }
    });

});
