define(function(require) {

    var p = require('p');

    var RecognitionData = p.extend({

        allMatches: null,

        bestMatch: null,

        $create: function(matches) {
            this.allMatches = matches;
            this.bestMatch = null;
            matches.forEach(function(match) {
                if (this.bestMatch != null) {
                    this.bestMatch = match.value > this.bestMatch.value ? match : this.bestMatch;
                }
                else {
                    this.bestMatch = match;
                }
            }, this);
        }

    });

    return RecognitionData;
});