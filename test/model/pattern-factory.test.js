define(function(require){
   
    var chai = require("chai"),
        PatternFactory = require("model/pattern-factory");
    
    describe("PatternFactory", function() {
        
        it("creates a pattern form a flat list of coordinates", function() {
            
            var pattern = PatternFactory.fromFlatArray("NAME", [1,2,3,4], null);
            
            chai.assert.lengthOf(pattern.data, 2);
            chai.assert.strictEqual(pattern.data[0].x, 1);
            chai.assert.strictEqual(pattern.data[0].y, 2);
            chai.assert.strictEqual(pattern.data[1].x, 3);
            chai.assert.strictEqual(pattern.data[1].y, 4);

        });
        
    });
    
});