define(function(require) {
    var p = require('p'),
        SamplerDemo = require('demo/view/sampler-demo'),
        SamplerOverlay = require('demo/view/sampler-overlay'),
        MosesPatterns = require('model/mosespatterns'),
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

            var recogniser = DefaultRecogniser.create();
            recogniser.register(MosesPatterns.V);
            recogniser.register(MosesPatterns.DASH);
            recogniser.register(MosesPatterns.SEVEN);
            recogniser.register(MosesPatterns.Z);
            recogniser.register(MosesPatterns.LINE_DOWN_UP);
            recogniser.register(MosesPatterns.LINE_UP_DOWN);
            recogniser.register(MosesPatterns.LINE_LEFT_RIGHT);
            recogniser.register(MosesPatterns.LINE_RIGHT_LEFT);
            recogniser.on('recognised', function(data){
                if (data.bestMatching.recognised) {
                    console.log('Recognised: ' + data.bestMatching.pattern.name, data);
                }
                else {
                    console.log('Not recognised', data);
                }
            });
            recogniser.sampler = sampler;
            sampler.activate();
        }

    });

    return Demo;
});