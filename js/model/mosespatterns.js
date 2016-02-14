define(function(require){

    var p = require('p'),
        DefaultMosesAlgorithm = require('algorithm/default-moses-algorithm'),
        PatternFactory = require('model/patternfactory');

    var MosesPatterns = p.extend({

        V: {
            value: PatternFactory.fromFlatArray(
                "V",
                [ -50, -100, -45, -90, -40, -80, -35, -70, -30, -60, -25, -50, -20, -40, -15, -30, - 10, -20, -5, -10, 0, 0,
                    5, -10, 10, -20, 15, -30, 20, -40, 25, -50, 30, -60, 35, -70, 40, -80, 45, -90, 50, -100],
                DefaultMosesAlgorithm.create(0.6, 4)
            )
        },

        DASH: {
            value: PatternFactory.fromFlatArray(
                "Dash Normal",
                [ -50, 100,-45, 90,-40, 80,-35, 70,-30, 60,-25, 50,-20, 40,-15, 30,-10, 20,-5, 10, 0, 0,
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
        }

    });

    return MosesPatterns;

});