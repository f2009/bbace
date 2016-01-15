/**
 * main
 */
define([
    'app/home/ctrl'
], function(home_ctrl) {

    //启动App
    var _start = function(){
        console.log("Start app ==================");

        home_ctrl.init();

        console.log("End app ==================");
    };

    return {
        start: _start
    }
});
