define(function(require) {
    
    var p = require('p');
    
    var Polyline = p.extend({
        
        $create: function() {
            this.segments = [];
            this.vertices = [];
            this.closed = false;
        }
        
    });
    
    return Polyline
    
});