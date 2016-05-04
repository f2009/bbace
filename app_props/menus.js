/**
 * User hefeng
 * Date 2016/4/12
 */
define(function() {
    /**
     * page: 模块标识
     * link: 相对于app的文件夹路径
     * view: 需要展示的视图，如果默认是main则可不写
     */
    return [
        //测试数据一
        {
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
                            url: '#/page?link=test_mvc-backbone'
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
                            url: '#/page?link=test_mvc-angularjs'
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
                url: '#/page?link=test&view=view'
            }]
        },

        //测试数据二
        {
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
        }
    ];

});
