define(function(require) {

    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var MultiplePatternAlgorithm = require('../js/algorithm/multiple-pattern-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var Match = require('../js/model/match');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternFactory = require('../js/model/pattern-factory');
    var MultiplePattern = require('../js/model/multiple-pattern');
    var Pattern = require('../js/model/pattern');
    var Point = require('../js/model/point');
    var RecognitionData = require('../js/model/recognition-data');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');
    var Math = require('../js/util/math');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"MultiplePatternAlgorithm":MultiplePatternAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm},"model":{"Match":Match,"MosesPatterns":MosesPatterns,"PatternFactory":PatternFactory,"MultiplePattern":MultiplePattern,"Pattern":Pattern,"Point":Point,"RecognitionData":RecognitionData},"recogniser":{"DefaultRecogniser":DefaultRecogniser},"util":{"Math":Math},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler}}

});