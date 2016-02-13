define(function(require) {
    var p = require('p'),
        SamplerDemo = require('demo/view/sampler-demo');

    var Demo = p.extend({

        sampler: null,

        $create: function() {
            this._context = p.Context.create();
            this.appView = p.Component.Root(document.body, this._context);
            this._context.build();
        },

        run: function(element) {
            this.samplerDemo = SamplerDemo.create();
            this.appView.add(this.samplerDemo);
        }

    });

    return Demo;
});