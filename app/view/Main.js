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
                      xtype : 'fieldset',
                      title: 'Standard Slider Input',
                      items : [
                        {
                          xtype: 'sliderfieldextended',
                          name: 'slider_decimal',
                          labelText: 'Decimal',
                          label: 'Decimal',
                          value: 3,
                          minValue: 0,
                          maxValue: 100,
                          increment: 0.25
                        },
                        {
                          xtype: 'sliderfieldextended',
                          name: 'slider_integer',
                          labelText: 'Integer',
                          label: 'Integer',
                          value: 9,
                          minValue: 0,
                          maxValue: 100
                        }
                      ],
                      flex:2
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