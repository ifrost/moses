define(function(require) {
    
    var chai = require("chai"),
        DirectionUtil = require("util/direction"),
        Directions = require("model/directions"),
        Point = require("model/point");
    
    describe.only("DirectionUtil", function() {
        
        it("Calculates simple direction", function() {
            var direction;
            
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(0,-10));
            chai.assert.strictEqual(direction, Directions.UP);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(0,10));
            chai.assert.strictEqual(direction, Directions.DOWN);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(10,0));
            chai.assert.strictEqual(direction, Directions.RIGHT);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(-10,0));
            chai.assert.strictEqual(direction, Directions.LEFT);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(10,-10));
            chai.assert.strictEqual(direction, Directions.RIGHT_UP);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(10,10));
            chai.assert.strictEqual(direction, Directions.RIGHT_DOWN);
            
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(-10,-10));
            chai.assert.strictEqual(direction, Directions.LEFT_UP);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(-10,10));
            chai.assert.strictEqual(direction, Directions.LEFT_DOWN);
                        
            direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(0,0));
            chai.assert.strictEqual(direction, Directions.NO_MOVE);
        });
        
        it('Cases', function() {
                        
            var direction = DirectionUtil.twoPointsDirection(Point.create(0,0), Point.create(-10,-100));
            chai.assert.strictEqual(direction, Directions.UP);
        });

        
    });
});