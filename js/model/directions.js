define(function(require) {
    
    var p = require("p");
    
    var Directions = p.extend({
         UP: 1,
         RIGHT_UP: 2,
         RIGHT: 3,
         RIGHT_DOWN: 4,
         DOWN: 5,
         LEFT_DOWN: 6,
         LEFT: 7,
         LEFT_UP: 8,
         NO_MOVE: 9
    });
    
    return Directions;
});