define(function(require) {

    var p = require('p'),
        Point = require('model/point'),
        Pattern = require('model/pattern');

    var PatternFactory = p.extend({

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