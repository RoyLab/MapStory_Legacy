Ext.define('senchaApp1.view.MainPlayer', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        //'senchaApp1.view.AudioPlayer'
    ],
    config: {
        layout:'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'MapStory',
                id:'appTitle'
            },
        ],
        html:'<h1>Here is a head</h1>'
        }
    }
);