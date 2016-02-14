define(function(require) {

    var p = require('p');

    var SamplerOverlay = p.Component.extend({

        $create: function() {
            this.root.className = 'overlay';
        }

    });

    return SamplerOverlay;
});