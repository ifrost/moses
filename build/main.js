define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternCollection = require('../js/model/pattern-collection');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var RecognitionData = require('../js/model/recognition-data');
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var DomSampler = require('../js/sampler/dom-sampler');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Math = require('../js/util/math');

    return {"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"sampler":{"DomSampler":DomSampler,"DistanceSampler":DistanceSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Math":Math}}

});