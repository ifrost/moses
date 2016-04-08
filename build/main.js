define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var PolygonalLineAlgorithm = require('../js/algorithm/polygonal-line-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternCollection = require('../js/model/pattern-collection');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Sampler = require('../js/sampler/sampler');
    var Math = require('../js/util/math');

    return {"algorithm":{"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"PolygonalLineAlgorithm":PolygonalLineAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"TimeSampler":TimeSampler,"Sampler":Sampler},"util":{"Math":Math}}

});