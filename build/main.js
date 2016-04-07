define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var Math = require('../js/util/math');
    var TimeSampler = require('../js/sampler/time-sampler');
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternCollection = require('../js/model/pattern-collection');
    var Point = require('../js/model/point');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var RecognitionData = require('../js/model/recognition-data');

    return {"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Math":Math},"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternCollection":PatternCollection,"Point":Point,"PatternFactory":PatternFactory,"Pattern":Pattern,"RecognitionData":RecognitionData}}

});