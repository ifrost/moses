define(function(require) {
    
    var p = require("p"),
        Point = require('model/point');
    
    var DirectionUtil = p.extend({
        
        /**
         * Convert two points to direction
         * 1 - up
         * 2 - right-up
         * 3 - right
         * 4 - right-down
         * 5 - down
         * 6 - left-down
         * 7 - left
         * 8 - left-up
         * 0 - no move
         *
         * scheme:
         *  812
         *  703
         *  654
         *
         * @param {Point} p1
         * @param {Point} p2
         * @return
         */
        twoPointsDirection: function(p1, p2) {
            var direction = p2.subtract(p1);
            if (p1.x === p2.x && p1.y === p2.y) {
                return 0; // no move
            }

            direction.y = -direction.y; // screen coordinates

            var base = Point.create(0, 1);
            var dotProduct = direction.x * base.x + direction.y * base.y;
            var cos = dotProduct / (direction.length * base.length);

            var result;
            if (direction.x < 0) {
                result = (2 * Math.PI - Math.acos(cos)) / (Math.PI / 4) + 1.5;
                if (result >= 9) {
                    result -= 9;
                }
            }
            else {
                result = (Math.acos(cos)) / (Math.PI / 4) + 1.5
            }

            return Math.floor(result);
        }
        
    });
    
    return DirectionUtil;
    
});