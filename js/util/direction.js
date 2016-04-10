define(function(require) {
    
    var p = require("p"),
        Directions = require('model/directions'),
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

            var base = Point.create(0, -1);
            var dotProduct = direction.x * base.x + direction.y * base.y;
            var cos = dotProduct / (direction.length * base.length);
            var eight = this._eight(Math.acos(cos));
            
            if (direction.x < 0) {
                switch (eight) {
                    case 0: return Directions.UP;
                    case 1: case 2: return Directions.LEFT_UP;
                    case 3: case 4: return Directions.LEFT;
                    case 5: case 6: return Directions.LEFT_DOWN;
                    case 7: return Directions.DOWN;
                }
            }
            else {
                switch (eight) {
                    case 0: return Directions.UP;
                    case 1: case 2: return Directions.RIGHT_UP;
                    case 3: case 4: return Directions.RIGHT;
                    case 5: case 6: return Directions.RIGHT_DOWN;
                    case 7: return Directions.DOWN;
                }
            }
        },
        
        PI8: Math.PI / 8,
        
        _eight: function(angle) {
            var eight = angle / this.PI8;
            if (eight === 8) {
                return 7;
            }
            else {
                return Math.floor(eight);
            }
        }
        
    });
    
    return DirectionUtil;
    
});