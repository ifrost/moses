define(function(require) {

    var p = require('p');

    var RecognitionData = p.extend({

        allMatchings: null,

        bestMatching: null,

        $create: function(matchings) {
            this.allMatchings = matchings;
            this.bestMatching = null;
            matchings.forEach(function(matching) {
                if (this.bestMatching != null) {
                    this.bestMatching = matching.value > this.bestMatching.value ? matching : this.bestMatching;
                }
                else {
                    this.bestMatching = matching;
                }
            }, this);
        }

    });

    return RecognitionData;
});