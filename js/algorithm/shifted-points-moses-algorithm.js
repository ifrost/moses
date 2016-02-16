define(function(require) {

    var DefaultMosesAlgorithm = require('algorithm/default-moses-algorithm');

    var ShiftedPointsMosesAlgorithm = DefaultMosesAlgorithm.extend({

        _preparePatternData: function(data) {
            return this._shiftData(data);
        },

        _prepareSamplingData: function(data) {
            return this._shiftData(data);
        },

        _shiftData: function(data) {
            this._shiftRight(data, this._upperLeftPointIndex(data));
            return data;
        },

        _shiftRight: function(data, shifts) {
            for (var i = 0; i < shifts; i++) {
                var point = data.shift();
                data.push(point);
            }
        },

        _upperLeftPointIndex: function(data) {
            var x = Infinity;
            var y = Infinity;
            var index = -1;

            for (var i = 0; i < data.length; i++) {
                var point = data[i];
                if (point.y < y || (point.y == y && point.x < x)) {
                    x = point.x;
                    y = point.y;
                    index = i;
                }
            }
            return index;
        }

    });

    return ShiftedPointsMosesAlgorithm;

});