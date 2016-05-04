/**
 * User hefeng
 * Date 2016/4/12
 */
define(function() {
    /**
     * 菜单配置
     * rsId: 权限过滤唯一标识
     * iconCls: 前置图标
     * name: 菜单标题
     * items: 子菜单项
     * deps: 需要展示的view(页面视图)
     */
    return [
        //测试数据一
        {
            rsId: 'menu.query',
            iconCls: 'fa-desktop',
            name: '框架测试',
            items: [
                {
                    rsId: 'menu.query1',
                    name: 'MVC',
                    items: [
                        {
                            rsId: 'menu.query1-1',
                            name: 'Backbone',
                            iconCls: 'fa-leaf blue',
                            items: [
                                {
                                    rsId: 'menu.query1-1-1',
                                    name: 'Backbone(Model)',
                                    props: {
                                        trigger: 'test:mvc:backbone',
                                        deps: 'app/test_mvc/backbone/main'
                                    }
                                }
                            ]
                        },
                        {
                            rsId: 'menu.query1-2',
                            name: 'AngularJS',
                            iconCls: 'fa-leaf red',
                            items: [
                                {
                                    rsId: 'menu.query1-2-1',
                                    name: 'angularJS模型',
                                    props: {
                                        trigger: 'test:mvc:angularjs',
                                        deps: 'app/test_mvc/angularjs/main'
                                    }
                                }
                            ]
                        }
                    ]
                },{
                    rsId: 'menu.query2',
                    name: '项目测试',
                    props: {
                        trigger: 'test:do',
                        deps: 'app/test/ctrl'
                    }
                },{
                    rsId: 'menu.query3',
                    name: '异常处理',
                    props: {
                        trigger: 'exceptions:list',
                        deps: 'app/account/exceptions/list-view'
                    }
                }
            ]
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
