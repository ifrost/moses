define(function(require) {
    
    var chai = require("chai"),
        ArrayUtil = require("util/array");
        
    describe("ArrayUtil", function() {
        
        it("Compares two arrays", function() {
            chai.assert.isOk(ArrayUtil.compare([1,2,3], [1,2,3]));
            chai.assert.isNotOk(ArrayUtil.compare([1,2,3, 4], [1,2,3]));
            chai.assert.isNotOk(ArrayUtil.compare([1,2,3], [1,2,4]));
        });
    
        
    });
});