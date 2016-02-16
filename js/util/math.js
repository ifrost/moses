define(function(require) {

    var p = require('p');

    var MathUtil = p.extend({

        /**
         * Calculate distance between points
         * @param {Point} a
         * @param {Point} b
         *
         * @returns {number}
         */
        distance: function(a, b) {
            var dx = a.x - b.x, dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

    });

    return MathUtil;
});