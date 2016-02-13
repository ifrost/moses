define(function(require) {
    var p = require('p'),
        DistanceSampler = require('sampler/distance-sampler');

    var Demo = p.extend({

        sampler: null,

        run: function(element) {
            this.sampler = DistanceSampler.create(element, 50);
            this.sampler.on("started", this._log.bind(this, 'started'), this);
            this.sampler.on("sampled", this._log.bind(this, 'sampled'), this);
            this.sampler.on("finished", this._log.bind(this, 'finished'), this);
            this.sampler.on("activated", this._log.bind(this, 'activated'), this);
            this.sampler.on("deactivated", this._log.bind(this, 'deactivated'), this);

            this.sampler.activate();
        },

        _log: function(event) {
            console.log(event + ': ' + this.sampler.getData().length + ' points. Last point: ' + this.sampler.getLastPosition());
        }
    });

    return Demo;
});