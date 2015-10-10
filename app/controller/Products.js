Ext.define('senchaApp1.controller.Products', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'products/:id': 'showProduct'
        }
    },

    showProduct: function(id) {
        alert('showing product ' + id);
    }
});