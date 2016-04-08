define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var Match = require('../js/model/match');
    var PatternCollection = require('../js/model/pattern-collection');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var Math = require('../js/util/math');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"model":{"Match":Match,"PatternCollection":PatternCollection,"MosesPatterns":MosesPatterns,"PatternFactory":PatternFactory,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"util":{"Math":Math},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler}}

});