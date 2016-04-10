define(function(require) {

    var p = require('p'),
        Directions = require('model/directions'),
        DefaultMosesAlgorithm = require('algorithm/default-moses-algorithm'),
        PolygonalLineAlgorithm = require('algorithm/polygonal-line-algorithm'),
        ShiftedPointsMosesAlgorithm = require('algorithm/shifted-points-moses-algorithm'),
        StraightLineAlgorithm = require("algorithm/straight-line-algorithm"),
        ReversedMosesAlgorithm = require('algorithm/reversed-moses-algorithm'),
        Pattern = require("model/pattern"),
        PatternCollection = require('model/pattern-collection'),
        PatternFactory = require('model/pattern-factory');

    /**
     * List of some pattern using moses algorithm for recognition
     */
    var MosesPatterns = p.extend({

        $create: function() {
            this.CIRCLE = PatternCollection.create(
                "Circle",
                this.CIRCLE_CLOCKWISE,
                this.CIRCLE_COUNTER_CLOCKWISE
            );

            this.SQUARE = PatternCollection.create(
                "Square",
                this.LEFT_TOP_SQUARE,
                this.RIGHT_TOP_SQUARE,
                this.LEFT_BOTTOM_SQUARE,
                this.RIGHT_BOTTOM_SQUARE
            )
        },

        CIRCLE_CLOCKWISE: {
            value: PatternFactory.fromFlatArray(
                "Circle (clockwise)",
                [0, -100, 17, -98.5, 34, -94, 50, -86.6, 64.2, -76.6, 76.6, -64.2, 86.6, -50, 94, -34, 98.5, -17.7,
                    100, 0, 98.5, 17.7, 94, 34, 86.6, 50, 76.6, 64.2, 64.2, 76.6, 50, 86.6, 34, 94, 17, 98.5, 0, 100,
                    -17, 98.5, -34, 94, -50, 86.6, -64.2, 76.6, -76.6, 64.2, -86.6, 50, -94, 34, -98.5, 17.7, -100, 0,
                    -98.5, -17.7, -94, -34, -86.6, -50, -76.6, -64.2, -64.2, -76.6, -50, -86.6, -34, -94, -17, -98.5, 0, -100],
                ShiftedPointsMosesAlgorithm.create(0.6, 10)
            )
        },

        CIRCLE_COUNTER_CLOCKWISE: {
            value: PatternFactory.fromFlatArray(
                "Circle (counter clockwise)",
                [0, -100, -17, -98.5, -34, -94, -50, -86.6, -64.2, -76.6, -76.6, -64.2, -86.6, -50, -94, -34, -98.5, -17.7,
                    -100, 0, -98.5, 17.7, -94, 34, -86.6, 50, -76.6, 64.2, -64.2, 76.6, -50, 86.6, -34, 94, -17, 98.5, 0, 100,
                    17, 98.5, 34, 94, 50, 86.6, 64.2, 76.6, 76.6, 64.2, 86.6, 50, 94, 34, 98.5, 17.7, 100, 0, 98.5,
                    -17.7, 94, -34, 86.6, -50, 76.6, -64.2, 64.2, -76.6, 50, -86.6, 34, -94, 17, -98.5, 0, -100],
                ShiftedPointsMosesAlgorithm.create(0.6, 10)
            )
        },

        LEFT_TOP_SQUARE: {
            value: PatternFactory.fromFlatArray(
                "Square (from left top corner)",
                [0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0,
                    90, 10, 90, 20, 90, 30, 90, 40, 90, 50, 90, 60, 90, 70, 90, 80, 90, 90,
                    80, 90, 70, 90, 60, 90, 50, 90, 40, 90, 30, 90, 20, 90, 10, 90, 0, 90,
                    0, 80, 0, 70, 0, 60, 0, 50, 0, 40, 0, 30, 0, 20, 0, 10, 0, 0],
                ReversedMosesAlgorithm.create(0.7, 4)
            )
        },

        RIGHT_TOP_SQUARE: {
            value: PatternFactory.fromFlatArray(
                "Square (from right top corner)",
                [90, 0, 90, 10, 90, 20, 90, 30, 90, 40, 90, 50, 90, 60, 90, 70, 90, 80,
                    90, 90, 80, 90, 70, 90, 60, 90, 50, 90, 40, 90, 30, 90, 20, 90, 10, 90,
                    0, 90, 0, 80, 0, 70, 0, 60, 0, 50, 0, 40, 0, 30, 0, 20, 0, 10, 0, 0,
                    10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0],
                ReversedMosesAlgorithm.create(0.7, 4)
            )
        },

        LEFT_BOTTOM_SQUARE: {
            value: PatternFactory.fromFlatArray(
                "Square (from left bottom corner)",
                [0, 90, 0, 80, 0, 70, 0, 60, 0, 50, 0, 40, 0, 30, 0, 20, 0, 10,
                    0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0,
                    90, 10, 90, 20, 90, 30, 90, 40, 90, 50, 90, 60, 90, 70, 90, 80, 90, 90,
                    80, 90, 70, 90, 60, 90, 50, 90, 40, 90, 30, 90, 20, 90, 10, 90, 0, 90],
                ReversedMosesAlgorithm.create(0.7, 4)
            )
        },

        RIGHT_BOTTOM_SQUARE: {
            value: PatternFactory.fromFlatArray(
                "Square (from right bottom corner)",
                [90, 90, 80, 90, 70, 90, 60, 90, 50, 90, 40, 90, 30, 90, 20, 90, 10, 90, 0, 90,
                    0, 80, 0, 70, 0, 60, 0, 50, 0, 40, 0, 30, 0, 20, 0, 10, 0, 0,
                    10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0,
                    90, 10, 90, 20, 90, 30, 90, 40, 90, 50, 90, 60, 90, 70, 90, 80, 90, 90],
                ReversedMosesAlgorithm.create(0.7, 4)
            )
        },

        V: {
            value: PatternFactory.fromFlatArray(
                "V",
                [-50, -100, -45, -90, -40, -80, -35, -70, -30, -60, -25, -50, -20, -40, -15, -30, -10, -20, -5, -10, 0, 0,
                    5, -10, 10, -20, 15, -30, 20, -40, 25, -50, 30, -60, 35, -70, 40, -80, 45, -90, 50, -100],
                DefaultMosesAlgorithm.create(0.6, 4)
            )
        },

        DASH: {
            value: PatternFactory.fromFlatArray(
                "Chevron",
                [-50, 100, -45, 90, -40, 80, -35, 70, -30, 60, -25, 50, -20, 40, -15, 30, -10, 20, -5, 10, 0, 0,
                    5, 10, 10, 20, 15, 30, 20, 40, 25, 50, 30, 60, 35, 70, 40, 80, 45, 90, 50, 100],
                DefaultMosesAlgorithm.create(0.6, 4)
            )
        },

        SEVEN: {
            value: PatternFactory.fromFlatArray(
                "Seven",
                [0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0, 100, 0,
                    90, 10, 80, 20, 70, 30, 60, 40, 50, 50, 40, 60, 30, 70, 20, 80, 10, 90, 0, 100],
                DefaultMosesAlgorithm.create(0.7, 2)
            )
        },

        Z: {
            value: PatternFactory.fromFlatArray(
                "Z",
                [0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0, 100, 0,
                    90, 10, 80, 20, 70, 30, 60, 40, 50, 50, 40, 60, 30, 70, 20, 80, 10, 90, 0, 100,
                    10, 100, 20, 100, 30, 100, 40, 100, 50, 100, 60, 100, 70, 100, 80, 100, 90, 100],
                DefaultMosesAlgorithm.create(0.65, 4)
            )
        },

        LINE_UP_DOWN: {
            value: PatternFactory.fromFlatArray(
                "Up-down",
                [0, 0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0, 100],
                DefaultMosesAlgorithm.create(0.7, 2)
            )
        },

        LINE_DOWN_UP: {
            value: PatternFactory.fromFlatArray(
                "Down-up",
                [0, 0, 0, -10, 0, -20, 0, -30, 0, -40, 0, -50, 0, -60, 0, -70, 0, -80, 0, -90, 0, -100],
                DefaultMosesAlgorithm.create(0.7, 2)
            )
        },

        LINE_LEFT_RIGHT: {
            value: PatternFactory.fromFlatArray(
                "Left-right",
                [0, 0, 10, 0, 20, 0, 30, 0, 40, 0, 50, 0, 60, 0, 70, 0, 80, 0, 90, 0, 100, 0],
                DefaultMosesAlgorithm.create(0.7, 2)
            )
        },

        LINE_RIGHT_LEFT: {
            value: PatternFactory.fromFlatArray(
                "Right-left",
                [0, 0, -10, 0, -20, 0, -30, 0, -40, 0, -50, 0, -60, 0, -70, 0, -80, 0, -90, 0, -100, 0],
                DefaultMosesAlgorithm.create(0.7, 2)
            )
        },
        
        STRAIGHT_LINE: {
            value: Pattern.create("Straight line", [], StraightLineAlgorithm.create())
        },
        
        POLYGONAL: {
            value: {
                LINE: Pattern.create('Straight line', {
                    segments: 1
                }, PolygonalLineAlgorithm.create()),
                Z: Pattern.create("Z", {
                    segments: 3,
                    closed: false,
                    directions: [[Directions.RIGHT, Directions.LEFT_DOWN, Directions.RIGHT]]
                }, PolygonalLineAlgorithm.create()),
                TRIANGLE: Pattern.create("Triangle", {
                    segments: 3,
                    closed: true
                }, PolygonalLineAlgorithm.create()),
                TWO_LINES: Pattern.create("Two lines", {
                    segments: 2,
                    closed: false
                }, PolygonalLineAlgorithm.create()),
                RECTANGLE: Pattern.create("Rectangle", {
                    segments: 4,
                    closed: true,
                    directions: [
                            [Directions.RIGHT, Directions.DOWN, Directions.LEFT, Directions.UP],
                            [Directions.DOWN, Directions.LEFT, Directions.UP, Directions.RIGHT],
                            [Directions.LEFT, Directions.UP, Directions.RIGHT, Directions.DOWN],
                            [Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT],
                            
                            [Directions.DOWN, Directions.RIGHT, Directions.UP, Directions.LEFT],
                            [Directions.RIGHT, Directions.UP, Directions.LEFT, Directions.DOWN],
                            [Directions.UP, Directions.LEFT, Directions.DOWN, Directions.RIGHT],
                            [Directions.LEFT, Directions.DOWN, Directions.RIGHT, Directions.UP],
                        ]
                })
            }
        }

    });

    return MosesPatterns;

});