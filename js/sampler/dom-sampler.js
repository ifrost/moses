define(function(require) {

    var Sampler = require('sampler/sampler'),
        Point = require('model/point');

    var DomSampler = Sampler.extend({

        /**
         * DOM element
         */
        _element: null,

        $create: function(element) {
            this._element = element;
        },

        activate: function() {
            this.__startScreening = this._startScreening.bind(this);
            this._element.addEventListener('mousedown', this.__startScreening);
            Sampler.activate.call(this);
        },

        deactivate: function() {
            this._element.removeEventListener("mousedown", this.__startScreening);
            Sampler.deactivate.call(this);
        },

        _mousePosition: function(event) {
            return Point.create(event.x, event.y);
        },

        _addMousePosition: function(event) {
            this._data.push(this._mousePosition(event));
        },

        _continueScreening: function(event) {
            this._addMousePosition(event);
            this._dispatchSampled();
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

            this.__continueScreening = this._continueScreening.bind(this);
            this._element.addEventListener('mousemove', this.__continueScreening);

            this.__endScreening = this._endScreening.bind(this);
            this._element.addEventListener('mouseup', this.__endScreening);

            this._dispatchStarted();
        },

        _deactivateScreening: function() {
            this._element.removeEventListener('mousemove', this.__continueScreening);
            this._element.removeEventListener('mouseup', this.__endScreening);
        },

        _endScreening: function() {
            this._deactivateScreening();
            this._dispatchFinished();
        }

    });

    return DomSampler;

});