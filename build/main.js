define(function(require) {

    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var MosesPatterns = require('../js/model/moses-patterns');
    var Match = require('../js/model/match');
    var PatternCollection = require('../js/model/pattern-collection');
    var PatternFactory = require('../js/model/pattern-factory');
    var RecognitionData = require('../js/model/recognition-data');
    var Point = require('../js/model/point');
    var Pattern = require('../js/model/pattern');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Math = require('../js/util/math');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"MosesFit":MosesFit,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm},"model":{"MosesPatterns":MosesPatterns,"Match":Match,"PatternCollection":PatternCollection,"PatternFactory":PatternFactory,"RecognitionData":RecognitionData,"Point":Point,"Pattern":Pattern},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Math":Math}}

});