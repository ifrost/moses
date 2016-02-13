define(function(require) {
    var p = require('p');

    var Demo = p.extend({
        run: function() {
            console.log('Demo.');
        }
    });

    return Demo;
});