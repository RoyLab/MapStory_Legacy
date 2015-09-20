Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'senchaApp1.view.AudioPlayer'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                iconCls: 'maps',
                title: 'Map',
                //styleHtmlContent: true,
                //id:'mapmap',
                scrollable: false,
                layout:'vbox',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'MapStory',
                        id:'appTitle'
                    },
                    {
                        layout:'hbox',
                        styleHtmlContent: true,
                        style: 'background-color: #FFFFFF;',
                        items:[
                            {
                                xtype:'button',
                                ui:'round',
                                text:'Play',
                                width:'80px',
                                handler:function(){
                                    if (this.getText() == 'Play'){
                                        this.setText('Pause');
                                    }
                                    else{
                                        this.setText('Play');
                                    }
                                }
                            },
                            {
                                xtype: 'mp3player',
                                id:'player',
                                flex:1,
                            }
                        ]          
                    },
                    {
                        xtype:'panel',
                        id:'allmap',
                        styleHtmlContent: true,
                        flex:1,
                    }
                ]
            }]
 
        }
    }
);