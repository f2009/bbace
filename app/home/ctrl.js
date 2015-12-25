/**
 * home controller
 */
define(function(require, exports, module) {
    var View = require('app/home/view');

    return {
        init: function(){ new View().render(); }
    }

});
