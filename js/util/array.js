define(function(require) {
    
    var p = require('p');
    
    var ArrayUtil = p.extend({
        
        compare: function(a, b) {
            if (a.length !== b.length) {
                return false;
            }
            else {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        return false;
                    }
                }
            }
            return true;
        }
        
    });
    
    return ArrayUtil;
    
});