define(function() {

    App.on('test:mvc:backbone', function(options) {
        require(['app/test_mvc/backbone/view'], function(View) {
            App.show(new View);
        })
    })

});