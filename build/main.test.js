define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var Math = require('../test/util/math.test');
    var PatternFactory = require('../test/model/pattern-factory.test');
    var Point = require('../test/model/point.test');

    return {"util":{"Math":Math},"model":{"PatternFactory":PatternFactory,"Point":Point}}

});