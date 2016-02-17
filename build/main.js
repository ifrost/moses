define(function(require) {

    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var Match = require('../js/model/match');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var Math = require('../js/util/math');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var PatternCollection = require('../js/model/pattern-collection');
    var MosesPatterns = require('../js/model/moses-patterns');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm},"model":{"Match":Match,"PatternFactory":PatternFactory,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData,"PatternCollection":PatternCollection,"MosesPatterns":MosesPatterns},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler},"util":{"Math":Math}}

});