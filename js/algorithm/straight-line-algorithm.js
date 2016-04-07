define(function(require){
    
    
    var p = require('p'),
        Point = require('model/point'),
        Match = require('model/match');
        
    var StraightLineAlgorithm = p.extend({
        
        $create: function(noMovementTolerance) {
            this._tolerance = noMovementTolerance || 10;
        },
        
        /**
         * Match the pattern
         * @param {Pattern} pattern
         * @param {Point[]} samplingData
         * @returns {Match}
         */
        match: function(pattern, samplingData) {
            
            var xProjection = samplingData.map(function(point){return point.x});
            var yProjection = samplingData.map(function(point){return point.y});

            var xMovement = this._calculateMovement(xProjection);
            var yMovement = this._calculateMovement(yProjection);
            
            var pointsOnXDirection = this._pointsInDirection(xProjection, xMovement);
            var pointsOnYDirection = this._pointsInDirection(yProjection, yMovement);

            var totalOnDirection = pointsOnXDirection + pointsOnYDirection;
            var totalPoints = xProjection.length + yProjection.length;
            
            var value = totalOnDirection / totalPoints;
            
            console.log(xMovement, yMovement);
            console.log(pointsOnXDirection, xProjection.length, pointsOnYDirection, yProjection.length, yProjection);

            return Match.create(pattern, value, value > 0.9);
        },
        
        _delta: function(points) {
            var min = Math.min.apply(null, points);
            var max = Math.max.apply(null, points);
            return max - min;
        },
        
        _calculateMovement: function(points) {
            var delta = this._delta(points);
            
            if (Math.abs(delta) <= this._tolerance) {
                return 0;
            }
            else {
                return (points[0] - points[points.length - 1]) > 0 ? -1 : 1;
            }
        },
        
        _pointsInDirection: function(values, movement) {
        
            var total = 1;
            
            if (!movement) {
                return values.length;
            }
                    
            values.reduce(function(previous, current, index) {
                
                if (index === 0) {
                    total++;
                }
                else {
                    if (movement === 1) {
                        total += current > previous ? 1 : (current === previous ? 0.5 : 0);
                    }
                    else if (movement === -1) {
                        total += current < previous ? 1 : (current === previous ? 0.5 : 0);
                    }
                }
                
                return current;
            }.bind(this));
        
            return total;
        }
        
    });
    
    return StraightLineAlgorithm;
    
});