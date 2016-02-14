define(function(require){

    var p = require('p');

    /**
     * @alias Pattern
     */
    var Pattern = p.extend({
        name: null,
        data: null,
        algorithm: null,

        $create: function(name, data, algorithm) {
            this.name = name;
            this.data = data;
            this.algorithm = algorithm;
        }
    });

    return Pattern;

});