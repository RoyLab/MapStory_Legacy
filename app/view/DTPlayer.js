Ext.define('senchaApp1.view.DTPlayer', {
    extend: 'Ext.Container',
    xtype: 'dtplayer',
    requires: [
        'Ext.Img',
        'Ext.Label',
    ],

    //html:'<img src="play.png" class="test"/>',
    /*listeners: {

                tap:{
                    element: 'element',
                    delegate: 'img.test',
                    //event: 'tap',
                    fn: function() {
                        console.log('One!');
                    }
                },
            },*/

    config: {

        layout:{
            type:'hbox',
            align:'center',
        },

        cls:'mp3player',

        height:80,

        items:[
        {
            xtype:'container',
            docked:'top',
            height:3,
            layout:'hbox',

            items:[{
                xtype:'component',
                cls:'progressbar',
                height:3,
                flex:16
            },
            {
                xtype:'component',
                height:3,
                flex:39,
            },
            ],
        },
        {
            xtype:'image',
            src:'resources/images/album.jpg',
            width:80,
            height:80,

            listeners:{
                tap:{
                    //event: 'tap',
                    fn: function() {
                        console.log('fdasfdsfad');
                        Ext.Viewport.setActiveItem(Ext.getCmp('player2i'));
                    }
                }
            }
        },
        {
            xtype:'spacer'
        },   
        {
            xtype:'label',
            html:'Story Goes Here',
        },
 /*           {
                xtype:'button',
                id:'b1',
                //ui:'round',
                width:'50px',
                height:'50px',
                //style: 'border-radius:100em',
                cls:'mybutton',
                border: 0,
                //iconCls:'tv',
                //padding:0,
            },
            {
                xtype:'button',
                text:'button2'
            },*/
        {xtype:'spacer'},   
        {
            xtype:'component',
            width:80,
            height:64,
            cls:'play',
        },
        ]
    }
});
