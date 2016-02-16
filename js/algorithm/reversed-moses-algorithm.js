define(function(require) {

    var DefaultMosesAlgorithm = require('algorithm/default-moses-algorithm');

    var ReversedMosesAlgorithm = DefaultMosesAlgorithm.extend({

        matchingValue: function(patternData, samplingData) {
            var reversed = patternData.slice();
            reversed.reverse();

            var straightValue = DefaultMosesAlgorithm.matchingValue.call(this, patternData, samplingData);
            var reversedValue = DefaultMosesAlgorithm.matchingValue.call(this, reversed, samplingData);

            return straightValue > reversedValue ? straightValue : reversedValue;
        }

    });

    return ReversedMosesAlgorithm;

});