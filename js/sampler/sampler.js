define(function(require){

    var p = require('p');

    /**
     * Base object for sampling/collecting the gesture data
     *
     * @Sampler
     */
    var Sampler = p.extend([p.Dispatcher], {

        _data: null,

        getData: function() {
            return this._data;
        },

        activate: function() {
            this._data = [];
            this.dispatch("activated", this._data);
        },

        deactivate: function() {
            this._data = [];
            this.dispatch("deactivated", this._data);
        },

        _dispatchSampled: function() {
            this.dispatch("sampled", this._data);
        },

        _dispatchStarted: function() {
            this.dispatch("started", this._data);
        },

        _dispatchFinished: function() {
            this.dispatch("finished", this._data);
        }

    });

    return Sampler;

});