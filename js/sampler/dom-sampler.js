define(function(require){

    var Sampler = require('sampler/sampler');

    var DomSampler = Sampler.extend({

        /**
         * DOM element
         */
        _element: null,

        _isScreeningActive: false,

        _data: null,

        $create: function(element) {
            this._data = [];
            this._isScreeningActive = false;
            this._element = element;
        },

        getData: function() {
            return this._data;
        },

        activate: function() {
            this.__startScreening = this._startScreening.bind(this);
            this._element.addEventListener('mousedown', this.__startScreening);
            this.dispatch("activated", this._data);
        },

        deactivate: function() {
            this._element.removeEventListener("mousedown", this.__startScreening);
            this.dispatch("deactivated", this._data);
        },

        _mousePosition: function(event) {
            return {x: event.x, y: event.y, toString: function(){return '(' + this.x + ',' + this.y + ')'}};
        },

        _addMousePosition: function(event) {
            this._data.push(this._mousePosition(event));
        },

        _continueScreening: function(event) {
            this._addMousePosition(event);
            this.dispatch("sampled", this._data);
        },

        getLastPosition: function() {
            if (this._data.length > 0) {
                return this._data[this._data.length - 1];
            }
            else {
                return null;
            }
        },

        _startScreening: function(event) {
            this._data = [];
            this._addMousePosition(event);
            this._isScreeningActive = true;

            this.__continueScreening = this._continueScreening.bind(this);
            this._element.addEventListener('mousemove', this.__continueScreening);

            this.__endScreening = this._endScreening.bind(this);
            this._element.addEventListener('mouseup', this.__endScreening);

            this.dispatch("started", this._data);
        },

        _deactivateScreening: function() {
            this._isScreeningActive = false;
            this._element.removeEventListener('mousemove', this.__continueScreening);
            this._element.removeEventListener('mouseup', this.__endScreening);
        },

        _endScreening: function() {
            this._deactivateScreening();
            this.dispatch("finished", this._data);
        }

    });

    return DomSampler;

});