define(function(require) {

    var p = require('p');

    var SamplerDemo = p.Component.extend({

        tag: 'div',

        $create: function() {
            this.root.id = "playground";
            this.root.className = "playground";
        },

        setSampler: function(sampler) {
            this.sampler = sampler;

            this.sampler.on("started", this._draw.bind(this), this);
            this.sampler.on("sampled", this._draw.bind(this), this);

            this.sampler.on("finished", this._clear.bind(this), this);
        },

        _draw: function() {

            var position = this.sampler.getLastPosition();

            var marker = document.createElement('div');
            marker.style.width = '4px';
            marker.style.height = '4px';
            marker.style.backgroundColor = 'black';
            marker.style.position = 'absolute';
            marker.style.top = (position.y - 1) + 'px';
            marker.style.left = (position.x - 1) + 'px';
            this.root.appendChild(marker);

            if (!this._previousPoint) {
                this._previousPoint = position;
                return;
            }

            var line = createLine(this._previousPoint.x, this._previousPoint.y, position.x, position.y)
            this.root.appendChild(line);
            this._previousPoint = position;
        },

        _clear: function() {
            this._previousPoint = null;
            setTimeout(function() {
                this.root.innerHTML = '';
            }.bind(this), 1000)
        },

        _log: function(event) {
            console.log(event + ': ' + this.sampler.getData().length + ' points. Last point: ' + this.sampler.getLastPosition());
        }

    });

    return SamplerDemo;
});


function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
        + 'width: ' + length + 'px; '
        + 'height: 0px; '
        + '-moz-transform: rotate(' + angle + 'rad); '
        + '-webkit-transform: rotate(' + angle + 'rad); '
        + '-o-transform: rotate(' + angle + 'rad); '
        + '-ms-transform: rotate(' + angle + 'rad); '
        + 'position: absolute; '
        + 'top: ' + y + 'px; '
        + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
}
