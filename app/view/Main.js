Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        ''
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
                    title: 'MapStory'
                    },
                    {
                        xtype:'panel',
                        style: 'background-color: #FFFFFF;',
                        styleHtmlContent: true,
                        items:[
                        {
                            layout:'hbox',
                            items:[
                            {
                                xtype:'button',
                                ui:'round',
                                text:'Play',
                                width:'80px'
                            },
                            {
                                type: 'Ext.slider.Single',
                                name: 'slider_integer',
                                value: 9,
                                minValue: 0,
                                maxValue: 100,
                                flex:1
                            }
                            ]
                        }]                   
                    },
                    {
                        layout:'fit',
                        styleHtmlContent: true,
                        flex:1,    
                        items:[{
                            xtype:'panel',
                            id:'allmap',
                        }]

                    }
                ]
            }]
 
        }
    }
);