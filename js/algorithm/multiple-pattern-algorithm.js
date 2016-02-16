define(function(require) {

    var p = require('p'),
        Matching = require('model/match');

    var MultiplePatternAlgorithm = p.extend({

        match: function(multiplePattern, samplingData) {

            var bestMatch, currentMatch;

            // find best match
            multiplePattern.patterns.forEach(function(pattern) {
                currentMatch = pattern.algorithm.match(pattern, samplingData);
                if (bestMatch != null) {
                    bestMatch = currentMatch.value > bestMatch.value ? currentMatch : bestMatch;
                }
                else {
                    bestMatch = currentMatch;
                }
            });

            // treat subpattern matching as complex pattern matching
            return Matching.create(multiplePattern, bestMatch.value, bestMatch.recognised);

        }

    });

    return MultiplePatternAlgorithm;

});