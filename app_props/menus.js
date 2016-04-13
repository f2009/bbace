/**
 * User hefeng
 * Date 2016/4/12
 */
define(function() {
    //测试数据一
    var TEST1 = {
        rsId: 'menu.query',
        iconCls: 'fa-desktop',
        name: '框架测试',
        items:[{
            rsId: 'menu.query1',
            name: 'MVC',
            items:[{
                rsId: 'menu.query1-1',
                name: 'Backbone',
                iconCls: 'fa-leaf blue',
                items: [
                    {
                        rsId: 'menu.query1-1-1',
                        name: '模型(Model)',
                        url: '#/test_mvc/backbone',
                        props: {
                            //trigger: 'mvc:backbone:model',
                            //deps: ['app/test_mvc/backbone/ctrl']
                        }
                    }
                ]
            },{
                rsId: 'menu.query1-2',
                name: 'AngularJS',
                iconCls: 'fa-leaf red',
                items: [
                    {
                        rsId: 'menu.query1-2-1',
                        name: '测试路由',
                        url: '#/test_mvc/angularjs',
                        props: {
                            //trigger: '',
                            //deps: ['']
                        }
                    }
                ]
            }]
        },{
            rsId: 'menu.query2',
            name: '测试跳转',
            url: 'http://www.baidu.com',
            props: {
                trigger: 'test:do',
                deps: ['app/test/ctrl']
            }
        },{
            rsId: 'menu.query3',
            name: '异常处理',
            props: {
                trigger: 'exceptions:detail:list',
                deps: ['app/account/exceptions/list-view']
            }
        }]
    };

    //测试数据二
    var TEST2 = {
        rsId: 'menu.algo',
        iconCls: 'fa-fax',
        name: '综合查询二',
        items:[{
            rsId: 'menu.algo1',
            name: '测试数据',
            items:[{
                rsId: 'menu.algo1-1',
                name: '手工记账',
                props: {
                    trigger: 'manual:account:list',
                    deps: ['app/account/manualAccount/list-view']
                }
            }]
        },{
            rsId: 'menu.algo2',
            name: '奖励分润',
            props: {
                trigger: 'posted:info:list',
                deps: ['app/account/profit/list-view']
            }
        },{
            rsId: 'menu.algo3',
            name: '异常处理',
            props: {
                trigger: 'exceptions:detail:list',
                deps: ['app/account/exceptions/list-view']
            }
        }]
    };

    return [TEST1, TEST2];
});
