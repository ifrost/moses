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
        },
        
        /**
         * Calculates the angle between two segments described with 3 points
         * @returns {number} angle in radians
         */
        threePointsAngle: function(start, joint, end) {
            var vectorA = start.subtract(joint);
            var vectorB = end.subtract(joint);
            
            var dotProduct = vectorA.x * vectorB.x + vectorA.y * vectorB.y;
            var acos = dotProduct / (vectorA.length * vectorB.length);
            
            return Math.acos(acos);
        }

    });

    return MathUtil;
});