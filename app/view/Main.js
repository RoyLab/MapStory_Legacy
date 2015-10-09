Ext.define('senchaApp1.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'senchaApp1.view.DTPlayer',
    ],
    config: {

        id:'mainview',

        items:[
        {
            xtype:'container',
            title:'MapStory',
            layout:'vbox',

            items: [
               /* {
                    xtype:'button',
                    text:'fdafdfa',
                    flex:1
                },*/
                  {
                    xtype:'dtplayer',
                    docked:'bottom',
                    flex:1
                },               {
                    xtype:'panel',
                    id:'allmap',
                    flex:1
                },
            ] 
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

        }],
    }
});