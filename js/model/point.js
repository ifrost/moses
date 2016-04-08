define(function(require) {

    var p = require('p'),
        MathUtil = require('util/math');

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

        subtract: function(point) {
            return Point.create(this.x - point.x, this.y - point.y);
        },

        length: {
            get: function() {
                return MathUtil.distance(this, Point.create(0, 0));
            }
        },

        toString: function() {
            return '(' + this.x + ',' + this.y + ')';
        }
    });

    return Point;

});