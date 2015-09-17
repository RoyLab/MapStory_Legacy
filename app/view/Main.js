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
                scrollable: false,
                layout:'vbox',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '地图故事（校庆版）'
                    },
                    {
                        layout:'hbox',
                        items:[
                        {
                            xtype:'button',
                            ui:'round',
                            text:'Hi',
                            width:'100'
                        },
                        {
                            xtype: 'sliderfieldextended',
                            name: 'slider_integer',
                            value: 9,
                            minValue: 0,
                            maxValue: 100,
                            flex:1
                        }
                        ]
                    },
                    {
                        layout:'fit',
                        items:[{
                            xtype:'audioplayer',
                            margin:20,
                            title:'Sample MP3'
                        }],
                        flex:0
                    },
                    {
                        xtype:'panel',
                        id:'allmap',
                        flex:1
                    }
                ]
            }]
 
        }
    }
);