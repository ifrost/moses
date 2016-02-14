define(function(require) {

    var p = require('p'),
        MosesFit = require('algorithm/moses-fit'),
        Point = require('model/point'),
        Matching = require('model/matching');

    var DefaultMosesAlgorithm = p.extend({

        _threshold: null,

        _minSamplerPoints: null,

        $create: function(threshold, minSamplerPoints) {
            this._threshold = threshold || 0.5;
            this._minSamplerPoints = minSamplerPoints || 5;
        },

        match: function(pattern, samplingData){
            var value = this._matchingValue(pattern.data, samplingData);

            var recognized = value >= this._threshold && samplingData.length >= this._minSamplerPoints;

            return Matching.create(pattern, value,  recognized);
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
            return this._calculateMosesSimilarity(patternDirections, samplingDirections);
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
            var dotProduct  = direction.x * base.x + direction.y * base.y;
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