Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.Panel',
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
                    },{
                      xtype:'panel',
                      id:'allmap',
                      flex:1
                    }
                ]
 
            }]

    } 
});