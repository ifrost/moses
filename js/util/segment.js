define(function(require) {
    
    var p = require('p'),
        Segment = require('model/segment');
    
    var SegmentUtil = p.extend({
        
        merge: function(list, indexA, indexB) {
            
        },
        
        mergeWithPrev: function(list, index) {
            var merged;
            list = list.concat();
            if (index === 0) {
                merged = this.mergeSegments(list[0], list[1]);
                list = [merged].concat(list.slice(2));
            }
            else {
                merged = this.mergeSegments(list[index - 1], list[index]);
                list = list.slice(0,index-1).concat([merged]).concat(list.slice(index + 1));
            }
            return list;
        },
        
        mergeSegments: function(a, b) {
            return Segment.create(a.start,b.end);
        },
        
    });
    
    return SegmentUtil;
    
})