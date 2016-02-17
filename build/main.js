define(function(require) {

    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternFactory = require('../js/model/pattern-factory');
    var Point = require('../js/model/point');
    var PatternCollection = require('../js/model/pattern-collection');
    var Pattern = require('../js/model/pattern');
    var RecognitionData = require('../js/model/recognition-data');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var Math = require('../js/util/math');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternFactory":PatternFactory,"Point":Point,"PatternCollection":PatternCollection,"Pattern":Pattern,"RecognitionData":RecognitionData},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Math":Math}}

});