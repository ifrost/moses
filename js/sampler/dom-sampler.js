define(function(require) {

    var Sampler = require('sampler/sampler'),
        Point = require('model/point');

    /**
     * Sampler listening to DOM events
     */
    var DomSampler = Sampler.extend({

        /**
         * DOM element
         */
        _element: null,

        _pointerId: null,

        $create: function(element) {
            this._element = element;
        },

        activate: function() {
            this.__startScreening = this._startScreening.bind(this);
            this._element.addEventListener('pointerdown', this.__startScreening);
            Sampler.activate.call(this);
        },

        deactivate: function() {
            this._element.removeEventListener("pointerdown", this.__startScreening);
            Sampler.deactivate.call(this);
        },

        _mousePosition: function(event) {
            return Point.create(event.pageX - this._element.offsetLeft, event.pageY - this._element.offsetTop);
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
            if (!this._pointerId) {
                this._pointerId = event.pointerId;

                this._data = [];
                this._addMousePosition(event);

                this.__continueScreening = this._continueScreening.bind(this);
                this._element.addEventListener('pointermove', this.__continueScreening);

                this.__endScreening = this._endScreening.bind(this);
                this._element.addEventListener('pointerup', this.__endScreening);

                this._dispatchStarted();
            }
        },

        _deactivateScreening: function() {
            this._element.removeEventListener('pointermove', this.__continueScreening);
            this._element.removeEventListener('pointerup', this.__endScreening);
            this._pointerId = null;
        },

        _endScreening: function() {
            this._deactivateScreening();
            this._dispatchFinished();
        }

    });

    return DomSampler;

});