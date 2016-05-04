define(function() {

    App.on('test:mvc:angularjs', function() {
        require(['app/test_mvc/angularjs/view'], function(View) {
            App.show(new View);
        })
    })

});