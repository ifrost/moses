define(function(require) {

    var p = require('p');

    var Matching = p.extend({

        value: null,

        pattern: null,

        recognised: false,

        $create: function(pattern, value, recognised) {
            this.pattern = pattern;
            this.value = value;
            this.recognised = recognised;
        }

    });

    return Matching;
});