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
                    title: '聆听'
                    },{
                      xtype:'panel',
                      id:'allmap',
                      flex:1
                    }
                    /*{
                        html: 'Some wonderful information',
                        style: 'background-color: #5E99CC;',
                        flex: 2
                    }*/
                ]
 
            },
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                    },
                    {
                     xtype: 'audio',
                     url: 'http://cdn.y.baidu.com/yinyueren/b02ee89bcc86048871e7cb311865282d.mp3',
                     id: 'sound1',
                     autoplay:true,
                     //hidden:true
                    }
                ],
                html: '<img style="height: 200px; width: 300px;" src="resources/images/01.jpg" />'
                /*html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")*/
            }]

    } 
});
 /*   config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'maps',
                iconCls: 'maps',
                styleHtmlContent: true,
                scrollable: false,
                layout:'vbox',
                items: [{
                    xtype: 'titlebar',
                    title: '调用地图'
                    },{
                      xtype:'panel',
                      id:'map',
                      flex:1
                    }
                ]
     
            },
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'https://www.cg.tuwien.ac.at/research/publications/2014/preiner2014clop/preiner2014clop-video.mp4',
                        //url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }*/
