define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var PolygonalLineAlgorithm = require('../test/algorithm/polygonal-line-algorithm.test');
    var Array = require('../test/util/array.test');
    var Direction = require('../test/util/direction.test');
    var Math = require('../test/util/math.test');
    var PatternFactory = require('../test/model/pattern-factory.test');
    var Point = require('../test/model/point.test');

    return {"algorithm":{"PolygonalLineAlgorithm":PolygonalLineAlgorithm},"util":{"Array":Array,"Direction":Direction,"Math":Math},"model":{"PatternFactory":PatternFactory,"Point":Point}}

});