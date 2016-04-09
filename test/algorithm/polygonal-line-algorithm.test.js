define(function(require) {
    
    var chai = require("chai"),
        Directions = require("model/directions"),
        PolygonalLineAlgorithm = require("algorithm/polygonal-line-algorithm"),
        Point = require("model/point");

    describe("PolygonalLineAlgorithm", function() {
    
        var algorithm;
    
        beforeEach(function() {
            algorithm = PolygonalLineAlgorithm.create({
                minLength: 1
            });
        });
        
        it("does not recognise if the sampling data does not contain enough points" , function() {
             var data = [Point.create(0,0), Point.create(5,0)];
             var match = algorithm.match(null, data);
             chai.assert.isNotOk(match.recognised);
        });
        
        it("recognises simple polyline", function() {
             var data = [Point.create(0,0), Point.create(5,0), Point.create(10,0)];
             var match = algorithm.match(null, data);
             chai.assert.isOk(match.recognised);
             chai.assert.lengthOf(match.polyline.segments, 1);
             chai.assert.lengthOf(match.polyline.vertices, 2);
             chai.assert.strictEqual(match.polyline.segments[0].direction, Directions.RIGHT);
        });
        
        it("recognises two segments", function() {
            
            var data = [
                    Point.create(0,0), Point.create(5,0), Point.create(10, 0), Point.create(15, 0), 
                    Point.create(20, 0),
                    Point.create(20, 5), Point.create(20, 10), Point.create(20, 15), Point.create(20, 20)
                ];
                
            var match = algorithm.match(null, data);
            
            chai.assert.isOk(match.recognised);

            chai.assert.lengthOf(match.polyline.segments, 2);
            
            chai.assert.strictEqual(match.polyline.segments[0].start.x, 0);
            chai.assert.strictEqual(match.polyline.segments[0].start.y, 0);
            chai.assert.strictEqual(match.polyline.segments[0].end.x, 20);
            chai.assert.strictEqual(match.polyline.segments[0].end.y, 0);
            
            chai.assert.strictEqual(match.polyline.segments[1].start.x, 20);
            chai.assert.strictEqual(match.polyline.segments[1].start.y, 0);
            chai.assert.strictEqual(match.polyline.segments[1].end.x, 20);
            chai.assert.strictEqual(match.polyline.segments[1].end.y, 20);
            
            chai.assert.lengthOf(match.polyline.vertices, 3);
            chai.assert.strictEqual(match.polyline.vertices[0].x, 0);
            chai.assert.strictEqual(match.polyline.vertices[0].y, 0);
            chai.assert.strictEqual(match.polyline.vertices[1].x, 20);
            chai.assert.strictEqual(match.polyline.vertices[1].y, 0);
            chai.assert.strictEqual(match.polyline.vertices[2].x, 20);
            chai.assert.strictEqual(match.polyline.vertices[2].y, 20);
            
            chai.assert.strictEqual(match.polyline.segments[0].direction, Directions.RIGHT);
            chai.assert.strictEqual(match.polyline.segments[1].direction, Directions.DOWN);

        });
        
    });
    
});