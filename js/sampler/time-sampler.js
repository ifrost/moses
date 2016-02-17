define(function(require) {

    var DomSampler = require('sampler/dom-sampler');

    /**
     * Time based DOM Sampler
     */
    var TimeSampler = DomSampler.extend({

        interval: null,

        _timer: null,

        _lastEvent: null,

        $create: function(element, interval) {
            this.interval = interval || 100;
        },

        _startScreening: function(event) {
            DomSampler._startScreening.call(this, event);
            this._lastEvent = null;
            this._timer = setInterval(this._sample.bind(this), this.interval);
        },

        _continueScreening: function(event) {
            this._lastEvent = event;
        },

        _sample: function() {
            if (this._lastEvent) {
                this._addMousePosition(this._lastEvent);
                this._dispatchSampled();
            }
        },

        _endScreening: function(event) {
            DomSampler._endScreening.call(this, event);
            clearInterval(this._timer);
        }

    });

    return TimeSampler;
});