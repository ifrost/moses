define(function(require) {
    
     var p = require('p'),
         Point = require('model/point'),
         Match = require('model/match');
        
    var PolygonalLineAlgorithm = p.extend({
        
        $create: function(minPoints) {
            this.minPoints = minPoints || 5;
        },
        
         /**
         * Match the pattern
         * @param {Pattern} pattern
         * @param {Point[]} samplingData
         * @returns {Match}
         */
        match: function(pattern, samplingData) {
            var lines = [], index = 0, data = samplingData.concat();
            
            var match = Match.create(pattern, 0, false);
            return match;
        }
        
    });
    
    return PolygonalLineAlgorithm;
    
});