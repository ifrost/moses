define(function(require) {

    var p = require('p'),
        Point = require('model/point'),
        Pattern = require('model/pattern');

    /**
     * Pattern factory.
     */
    var PatternFactory = p.extend({

        /**
         * Generates a pattern from flat list of poitns
         * @param {String} name - pattern name
         * @param {Number[]} points - flat list of points, e.g. [x1, y1, x2, y2, x3, y3,...]
         * @param {Algorithm} algorithm
         * @returns {Pattern}
         */
        fromFlatArray: function(name, points, algorithm) {
            if (points.length % 2 != 0) {
                throw Error("You must provide even number of coordinates!");
            }

            var data = [];

            for (var index = 0; index < points.length; index += 2) {
                data.push(Point.create(points[index], points[index + 1]));
            }

            return Pattern.create(name, data, algorithm);
        }
    });

    return PatternFactory;

});