define(function(require) {

    var p = require('p'),
        MultiplePatternAlgorithm = require('algorithm/pattern-collection-algorithm');

    /**
     * Collection of patterns
     * @alias PatternCollection
     */
    var PatternCollection = p.extend({

        patterns: null,

        $create: function(name /**, patterns */) {
            this.name = name;
            var patterns = Array.prototype.slice.call(arguments).slice(1);
            this.patterns = patterns;
            this.algorithm = MultiplePatternAlgorithm.create();
        }

    });

    return PatternCollection;

});