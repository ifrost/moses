define(function(require) {

    var MosesFit = require('../js/algorithm/moses-fit');
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternCollection = require('../js/model/pattern-collection');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var RecognitionData = require('../js/model/recognition-data');
    var Point = require('../js/model/point');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var Math = require('../js/util/math');
    var DomSampler = require('../js/sampler/dom-sampler');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var Sampler = require('../js/sampler/sampler');

    return {"algorithm":{"MosesFit":MosesFit,"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"Pattern":Pattern,"RecognitionData":RecognitionData,"Point":Point},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"util":{"Math":Math},"sampler":{"DomSampler":DomSampler,"DistanceSampler":DistanceSampler,"Sampler":Sampler}}

});