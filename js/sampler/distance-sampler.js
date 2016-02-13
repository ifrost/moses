define(function(require){

    var DomSampler = require('sampler/dom-sampler');

    var DistanceSampler = DomSampler.extend({

        distance: null,

        $create: function(element, distance) {
            this.distance =  distance;
        },

        _continueScreening: function(event) {
            var last = this.getLastPosition(),
                current = this._mousePosition(event);
            if (last !== null && this._calcDistance(last, current) >= this.distance) {
                DomSampler._continueScreening.call(this, event);
            }
        },

        _calcDistance: function(a, b) {
            var dx = a.x - b.x, dy = a.y  - b.y;
            return Math.sqrt(dx*dx + dy*dy);
        }

    });

    return DistanceSampler;
});