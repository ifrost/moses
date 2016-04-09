define(function(require) {

    var p = require('p'),
        DirectionUtil = require('util/direction');
    
    var Segment = p.extend({
        
        $create: function(start, end) {
            this.start = start;
            this.end = end;
        },
        
        vector: {
            get: function() {
                return this.end.subtract(this.start);
            }
        },
        
        direction: {
            get: function() {
                return DirectionUtil.twoPointsDirection(this.start, this.end)
            }
        }
        
    });
    
    return Segment;
    
});