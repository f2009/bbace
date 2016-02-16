/**
 * config.js
 * rsId: 关联菜单权限的唯一标识
 * iconCls: fontawesome字体库图标(http://fontawesome.io/)
 * name: 菜单文字显示
 * props: 自定义菜单属性(用于扩展)
 * items: 子菜单
 * trigger: 事件标识
 * deps: 菜单关联的视图
 */
define(function(){
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
                        props: {
                            trigger: 'mvc:backbone:model',
                            deps: ['app/test_mvc/backbone/ctrl']
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
                        name: 'xxx',
                        props: {
                            trigger: '',
                            deps: ['']
                        }
                    }
                ]
            }]
        },{
            rsId: 'menu.query2',
            name: '项目测试',
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

    //菜单
    var menus = [
        TEST1, TEST2
    ];

    //子级菜单关联父菜单
    var rs = {
        'menu.query': [
            'menu.query1',
            'menu.query2',
            'menu.query3'
        ],

        'menu.query1': [
            'menu.query1-1'
        ],

        'menu.query1-1': [
            'menu.query1-1-1'
        ],

        'menu.algo': [
            'menu.algo1',
            'menu.algo2',
            'menu.algo3'
        ],

        'menu.algo1': [
            'menu.algo1-1'
        ]
    };

    //菜单权限
    var rs2pm = {
        'menu.query1-1-1': [
            'system:test:c',
            'system:test:r'
        ],

        'menu.query2': [
            'system:test:s'
        ],

        'menu.query3': [
            'system:test:s'
        ],

        'menu.algo1-1': [
            'system:test:u'
        ],

        'menu.algo2': [
            'system:test:s'
        ],

        'menu.algo3': [
            'system:test:s'
        ]
    };

    return {
        menus: menus,
        rs2pm: rs2pm,
        rs: rs
    }
});

