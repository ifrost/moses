define(function(require) {
    
     var chai = require("chai"),
         Point = require("model/point");
         
     describe("Point", function() {
         
         it("subtracts without modificating orignal points", function() {
             
             var point = Point.create(10, 20);
             var sub = Point.create(5, -5);
             
             var result = point.subtract(sub);
             
             chai.assert.strictEqual(result.x, 5);
             chai.assert.strictEqual(result.y, 25);
             
             chai.assert.strictEqual(point.x, 10);
             chai.assert.strictEqual(point.y, 20);
             
             chai.assert.strictEqual(sub.x, 5);
             chai.assert.strictEqual(sub.y, -5);
             
         });
         
     });
});