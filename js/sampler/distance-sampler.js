define(function(require) {

    var DomSampler = require('sampler/dom-sampler'),
        MathUtil = require('util/math');

    var DistanceSampler = DomSampler.extend({

        distance: null,

        $create: function(element, distance) {
            this.distance = distance;
        },

        _continueScreening: function(event) {
            var last = this.getLastPosition(),
                current = this._mousePosition(event);

            if (last !== null && MathUtil.distance(last, current) >= this.distance) {
                DomSampler._continueScreening.call(this, event);
            }
        }

    });

    return DistanceSampler;
});