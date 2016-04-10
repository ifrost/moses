define(function(require) {

    var handjs = require("../node_modules/handjs/hand.min");
    var DefaultMosesAlgorithm = require('../js/algorithm/default-moses-algorithm');
    var MosesFit = require('../js/algorithm/moses-fit');
    var PatternCollectionAlgorithm = require('../js/algorithm/pattern-collection-algorithm');
    var PolygonalLineAlgorithm = require('../js/algorithm/polygonal-line-algorithm');
    var ReversedMosesAlgorithm = require('../js/algorithm/reversed-moses-algorithm');
    var StraightLineAlgorithm = require('../js/algorithm/straight-line-algorithm');
    var ShiftedPointsMosesAlgorithm = require('../js/algorithm/shifted-points-moses-algorithm');
    var DistanceSampler = require('../js/sampler/distance-sampler');
    var DomSampler = require('../js/sampler/dom-sampler');
    var Sampler = require('../js/sampler/sampler');
    var TimeSampler = require('../js/sampler/time-sampler');
    var Array = require('../js/util/array');
    var Direction = require('../js/util/direction');
    var Math = require('../js/util/math');
    var Segment = require('../js/util/segment');
    var Directions = require('../js/model/directions');
    var Match = require('../js/model/match');
    var PatternCollection = require('../js/model/pattern-collection');
    var MosesPatterns = require('../js/model/moses-patterns');
    var PatternFactory = require('../js/model/pattern-factory');
    var Polyline = require('../js/model/polyline');
    var Pattern = require('../js/model/pattern');
    var Segment = require('../js/model/segment');
    var RecognitionData = require('../js/model/recognition-data');
    var Point = require('../js/model/point');
    var DefaultRecogniser = require('../js/recogniser/default-recogniser');

    return {"algorithm":{"DefaultMosesAlgorithm":DefaultMosesAlgorithm,"MosesFit":MosesFit,"PatternCollectionAlgorithm":PatternCollectionAlgorithm,"PolygonalLineAlgorithm":PolygonalLineAlgorithm,"ReversedMosesAlgorithm":ReversedMosesAlgorithm,"StraightLineAlgorithm":StraightLineAlgorithm,"ShiftedPointsMosesAlgorithm":ShiftedPointsMosesAlgorithm},"sampler":{"DistanceSampler":DistanceSampler,"DomSampler":DomSampler,"Sampler":Sampler,"TimeSampler":TimeSampler},"util":{"Array":Array,"Direction":Direction,"Math":Math,"Segment":Segment},"model":{"Directions":Directions,"Match":Match,"PatternCollection":PatternCollection,"MosesPatterns":MosesPatterns,"PatternFactory":PatternFactory,"Polyline":Polyline,"Pattern":Pattern,"Segment":Segment,"RecognitionData":RecognitionData,"Point":Point},"recogniser":{"DefaultRecogniser":DefaultRecogniser}}

});