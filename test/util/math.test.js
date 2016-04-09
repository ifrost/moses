define(function(require) {
    
    var chai = require("chai"),
        MathUtil = require("util/math"),
        Point = require("model/point");
    
    describe("MathUtil", function() {
        
        it("Calculates distance between two points", function() {
            var a = Point.create(0,0);
            var b = Point.create(0,10);
            
            chai.assert.strictEqual(MathUtil.distance(a,b), 10);
        });
        
        it("Calculates an angle between segments", function() {
            
            var angle;
            
            angle = MathUtil.threePointsAngle(Point.create(0,0), Point.create(0,10), Point.create(10, 10));
            chai.assert.closeTo(angle, Math.PI / 2, 0.0001);
            
            angle = MathUtil.threePointsAngle(Point.create(10,10), Point.create(50,10), Point.create(45, 5));
            chai.assert.closeTo(angle, Math.PI / 4, 0.0001);
            
            angle = MathUtil.threePointsAngle(Point.create(50,50), Point.create(50,70), Point.create(50, 100));
            chai.assert.closeTo(angle, Math.PI, 0.0001);
            
            angle = MathUtil.threePointsAngle(Point.create(50,50), Point.create(50,70), Point.create(50, 50));
            chai.assert.closeTo(angle, 0, 0.0001);
        });
        
    });
});