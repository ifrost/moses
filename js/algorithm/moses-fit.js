define(function(require) {

    var p = require('p');

    /**
     * Normalises two list so they have the same length
     */
    var MosesFit = p.extend({

        _reducedPatternData: null,

        _reducedSamplingData: null,

        $create: function(listA, listB) {
            this._mosesFit(listA, listB);
        },

        getReducedPatternData: function() {
            return this._reducedPatternData;
        },

        getReducedSamplingData: function() {
            return this._reducedSamplingData;
        },

        _mosesFit: function(patternData, samplingData) {
            var offset;

            // reduce listA
            if (patternData.length >= samplingData.length) {
                offset = (patternData.length - 1) / (samplingData.length - 1);
                this._reducedPatternData = this._reduceList(patternData, offset == Infinity ? offset = samplingData.length : offset);
                this._reducedSamplingData = samplingData;
            }
            // reduce listB
            else {
                offset = (samplingData.length - 1) / (patternData.length - 1);
                this._reducedPatternData = patternData;
                this._reducedSamplingData = this._reduceList(samplingData, offset == Infinity ? offset = patternData.length : offset);
            }
        },

        _reduceList: function(list, offset) {
            var jumped = [];
            var current = 0;
            var currentPosition = 0;

            while (currentPosition < list.length - 1) {
                jumped.push(list[currentPosition]);

                current += offset;
                currentPosition = Math.round(current);
            }

            jumped.push(list[list.length - 1]);

            return jumped;
        }
    });

    return MosesFit;
});