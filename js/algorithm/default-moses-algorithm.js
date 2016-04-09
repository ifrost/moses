define(function(require) {

    var p = require('p'),
        DirectionUtil = require('util/direction'),
        MosesFit = require('algorithm/moses-fit'),
        Match = require('model/match');

    /**
     * Default Moses Algorithm.
     * 1) Normalise pattern data and sampling data so they have same length
     * 2) Convert list of points to list of directions
     * 3) Check how much sampling directions are similar to pattern directions
     * 4) Mark pattern as recognised if the similarity is greater than threshold
     *
     * @alias DefaultMosesAlgorithm
     */
    var DefaultMosesAlgorithm = p.extend({

        /**
         * Minimum similarity to recognise the pattern
         * @property {Number}
         */
        _threshold: null,

        /**
         * Minimum number of points to recognise the pattern
         * @property {Number}
         */
        _minSamplerPoints: null,

        $create: function(threshold, minSamplerPoints) {
            this._threshold = threshold || 0.5;
            this._minSamplerPoints = minSamplerPoints || 5;
        },

        /**
         * Match the pattern
         * @param {Pattern} pattern
         * @param {Point[]} samplingData
         * @returns {Match}
         */
        match: function(pattern, samplingData) {
            var value = this._matchingValue(pattern.data, samplingData);

            var recognized = value >= this._threshold && samplingData.length >= this._minSamplerPoints;

            return Match.create(pattern, value, recognized);
        },

        _matchingValue: function(patternData, samplingData) {
            var mosesFit = MosesFit.create(patternData.slice(), samplingData.slice());
            var reducedPatternData = this._preparePatternData(mosesFit.getReducedPatternData());
            var reducedSamplingData = this._prepareSamplingData(mosesFit.getReducedSamplingData());

            // pattern directions
            var patternDirections = this._pointsToDirections(reducedPatternData);

            // sampling directions
            var samplingDirections = this._pointsToDirections(reducedSamplingData);

            // match value
            var matchValue = this._calculateMosesSimilarity(patternDirections, samplingDirections);

            return matchValue;
        },

        _preparePatternData: function(data) {
            return data;
        },

        _prepareSamplingData: function(data) {
            return data;
        },

        _pointsToDirections: function(points) {
            var directions = [];
            for (var baseIndex = 0; baseIndex < points.length - 1; baseIndex++) {
                directions.push(DirectionUtil.twoPointsDirection(points[baseIndex], points[baseIndex + 1]));
            }
            return directions;
        },

        _calculateMosesSimilarity: function(listA, listB) {
            var max = listA.length; // A and B has same length
            var points = 0;
            for (var i = 0; i < max; i++) {
                var a = listA[i];
                var b = listB[i];

                if (a == b) {
                    points++;
                }
                else {
                    var diff = Math.abs(a - b);
                    points += (diff == 7 || diff == 1) ? 0.5 : 0;
                }
            }
            return points / max;
        }
    });

    return DefaultMosesAlgorithm;
});