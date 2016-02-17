define(function(require) {

    var p = require('p'),
        MosesFit = require('algorithm/moses-fit'),
        Point = require('model/point'),
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
                directions.push(this._simplifyDirection(points[baseIndex], points[baseIndex + 1]));
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
        },

        /**
         * Convert two points to direction
         * 1 - up
         * 2 - right-up
         * 3 - right
         * 4 - right-down
         * 5 - down
         * 6 - left-down
         * 7 - left
         * 8 - left-up
         * 0 - no move
         *
         * scheme:
         *  812
         *  703
         *  654
         *
         * @param {Point} p1
         * @param {Point} p2
         * @return
         */
        _simplifyDirection: function(p1, p2) {
            var direction = p2.subtract(p1);
            if (p1.x === p2.x && p1.y === p2.y) {
                return 0; // no move
            }

            var base = Point.create(0, 1);
            var dotProduct = direction.x * base.x + direction.y * base.y;
            var cos = dotProduct / (direction.length * base.length);

            var result;
            if (direction.x < 0) {
                result = (2 * Math.PI - Math.acos(cos)) / (Math.PI / 4) + 1.5;
                if (result >= 9) {
                    result -= 9;
                }
            }
            else {
                result = (Math.acos(cos)) / (Math.PI / 4) + 1.5
            }

            return Math.floor(result);
        }

    });

    return DefaultMosesAlgorithm;
});