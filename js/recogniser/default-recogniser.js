define(function(require) {

    var p = require('p'),
        RecognitionData = require('model/recognition-data');

    /**
     * @alias DefaultRecogniser
     */
    var DefaultRecogniser = p.extend([p.Dispatcher], {

        _sampler: null,

        patterns: null,

        sampler: {
            set: function(sampler) {
                if (this._sampler !== null) {
                    this._removeSampler();
                }
                this._sampler = sampler;
                this._initSampler();
            }
        },

        $create: function() {
            this._clear();
        },

        register: function(pattern) {
            if (this.patterns[pattern.name]) {
                throw new Error("Pattern with name " + pattern.name + " is already registered!");
            }
            this.patterns[pattern.name] = pattern;
        },

        _initSampler: function() {
            this.__onSamplingFinished = this._onSamplingFinished.bind(this);
            this._sampler.on('finished', this.__onSamplingFinished);
        },

        _removeSampler: function() {
            this._sampler.off('finished', this.__onSamplingFinished);
            this._sampler = null;
        },

        _onSamplingFinished: function(data) {
            this.dispatch('recognised', this._recognise(data))
        },

        _recognise: function(samplingData) {
            var matches = [];

            // examine all registered patterns
            for (var patternName in this.patterns) {
                matches.push(this.patterns[patternName].algorithm.match(this.patterns[patternName], samplingData));
            }

            return RecognitionData.create(matches);
        },

        _clear: function() {
            this.patterns = {};
        }
    });

    return DefaultRecogniser;
});