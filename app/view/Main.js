Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                iconCls: 'maps',
                title: 'Map',
                //styleHtmlContent: true,
                scrollable: true,
                layout:'vbox',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '地图故事（校庆版）'
                    },
                    {
                        xtype:'label',
                        html:'hehe',
                        flex:1
                    },
                    {
                      xtype:'panel',
                      id:'allmap',
                      flex:3
                    }
                ]
 
            },
            {
                iconCls: 'action',
                title: 'Video',
                //styleHtmlContent: true,
                scrollable: false,
                layout:'vbox',
                html:'hello kiki.'
            }
            ]

    } 
});