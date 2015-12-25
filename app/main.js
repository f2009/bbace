/**
 * main
 */
define(function(require, exports, module) {
    var home_ctrl = require('app/home/ctrl');

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
