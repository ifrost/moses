define(function(require) {
    var p = require('p'),
        SamplerDemo = require('demo/view/sampler-demo'),
        SamplerOverlay = require('demo/view/sampler-overlay'),
        MosesPatterns = require('model/moses-patterns'),
        DefaultRecogniser = require('recogniser/default-recogniser'),
        DistanceSampler = require('sampler/distance-sampler');

    var Demo = p.extend({

        sampler: null,

        $create: function() {
            this._context = p.Context.create();
            this.appView = p.Component.Root(document.body, this._context);
            this._context.build();
        },

        run: function() {
            this.samplerDemo = SamplerDemo.create();
            this.samplerOverlay = SamplerOverlay.create();

            var sampler = DistanceSampler.create(this.samplerDemo.root, 5);
            this.samplerDemo.setSampler(sampler);

            this.appView.add(this.samplerDemo);
            this.appView.add(this.samplerOverlay);

            var mosesPatterns = MosesPatterns.create();
            var recogniser = DefaultRecogniser.create();
            recogniser.register(mosesPatterns.V);
            recogniser.register(mosesPatterns.DASH);
            recogniser.register(mosesPatterns.SEVEN);
            recogniser.register(mosesPatterns.Z);
            recogniser.register(mosesPatterns.LINE_DOWN_UP);
            recogniser.register(mosesPatterns.LINE_UP_DOWN);
            recogniser.register(mosesPatterns.LINE_LEFT_RIGHT);
            recogniser.register(mosesPatterns.LINE_RIGHT_LEFT);
            recogniser.register(mosesPatterns.CIRCLE);
            recogniser.register(mosesPatterns.SQUARE);

            recogniser.on('recognised', function(data) {
                if (data.bestMatch.recognised) {
                    console.log('Recognised: ' + data.bestMatch.pattern.name + ' (' + Math.floor(data.bestMatch.value * 100) + '%)');
                }
                else {
                    console.log('Not recognised. Was it ' + data.bestMatch.pattern.name + '? (' + Math.floor(data.bestMatch.value * 100) + '%)');
                }
            });
            recogniser.sampler = sampler;
            sampler.activate();
        }

    });

    return Demo;
});