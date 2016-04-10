define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var PolygonalLineAlgorithm = require('../test/algorithm/polygonal-line-algorithm.test');
    var PatternFactory = require('../test/model/pattern-factory.test');
    var Point = require('../test/model/point.test');
    var Math = require('../test/util/math.test');
    var Array = require('../test/util/array.test');

    return {"algorithm":{"PolygonalLineAlgorithm":PolygonalLineAlgorithm},"model":{"PatternFactory":PatternFactory,"Point":Point},"util":{"Math":Math,"Array":Array}}

});