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
        
    });
});