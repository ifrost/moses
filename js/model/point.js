define(function(require){

    var p = require('p');

    /**
     * @alias Point
     */
    var Point = p.extend({
        x: null,

        y: null,

        $create: function(x, y) {
            this.x = x;
            this.y = y
        },

        toString: function() {
            return '(' + this.x + ',' + this.y + ')';
        }
    });

    return Point;

});