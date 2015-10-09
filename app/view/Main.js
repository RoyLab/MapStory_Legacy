Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'senchaApp1.view.DTPlayer',
    ],
    config: {

        layout:'vbox',

        hideAnimation:'slideOut',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'MapStory',
                id:'appTitle'
            },
            {
                xtype:'dtplayer',
                docked:'bottom',
            },
            /*{
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
            },*/
            {
                xtype:'panel',
                id:'allmap',
                styleHtmlContent: true,
                flex:1,
            }
        ] 
        }
    }
);