define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Math = require('../js/util/math');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternFactory = require('../js/model/pattern-factory');
    var PatternCollection = require('../js/model/pattern-collection');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Math":Math},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternFactory":PatternFactory,"PatternCollection":PatternCollection,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"recogniser":{"DefaultRecogniser":DefaultRecogniser}}

});