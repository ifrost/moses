define(function(require) {

    var MosesFit = require('../js/algorithm/moses-fit');
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var Math = require('../js/util/math');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var Sampler = require('../js/sampler/sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternCollection = require('../js/model/pattern-collection');
    var PatternFactory = require('../js/model/pattern-factory');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');

    return {"algorithm":{"MosesFit":MosesFit,"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm},"util":{"Math":Math},"sampler":{"DistanceSampler":DistanceSampler,"Sampler":Sampler,"DomSampler":DomSampler,"TimeSampler":TimeSampler},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"recogniser":{"DefaultRecogniser":DefaultRecogniser}}

});