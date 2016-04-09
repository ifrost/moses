define(function(require) {
    
     var p = require('p'),
         DirectionUtil = require('util/direction'),
         Point = require('model/point'),
         Polyline = require('model/polyline'),
         Segment = require('model/segment'),
         Match = require('model/match'),
         MathUtil = require('util/math');
        
    var PolygonalLineAlgorithm = p.extend({
        
        $create: function(opts) {
            opts = opts || {};
            this.tolerance = opts.tolerance || Math.PI / 12; // 15 degrees
            this.minLength = opts.minLength || 30;
            this.closedTolerance = opts.closedTolerance || 30;
        },
        
         /**
         * Match the pattern
         * @param {Pattern} pattern
         * @param {Point[]} samplingData
         * @returns {Match}
         */
        match: function(pattern, samplingData) {
            
            var match = Match.create(pattern, 0, false);
            match.polyline = Polyline.create();

            if (samplingData.length < 3) {
                return match;
            }
            
            var jointIndicies = this._getJointIndicies(samplingData);

            match.polyline.segments = this._getSegments(jointIndicies, samplingData);
            match.polyline.segments = this._smoothSegments(match.polyline.segments);
            
            match.polyline.segments = this._mergeShortSegments(match.polyline.segments);
            match.polyline.segments = this._smoothSegments(match.polyline.segments);
            
            match.polyline.vertices = [match.polyline.segments[0].start].concat(match.polyline.segments.map(function(segment) {
                return segment.end;
            }));
            
            match.polyline.closed = MathUtil.distance(match.polyline.vertices[0], match.polyline.vertices[match.polyline.vertices.length - 1]) < this.closedTolerance;
            
            match.recognised = true;

            return match;
        },
        
        _mergeShortSegments: function(segments) {
            var newSegments = segments.concat(), shortSegmentIndex, merged;
            
            while (newSegments.length > 1 && (shortSegmentIndex = this._indexOfShortSegment(newSegments)) !== -1) {
                if (shortSegmentIndex === 0) {
                    merged = this._mergeSegments(newSegments[0], newSegments[1]);
                    newSegments = [merged].concat(newSegments.slice(2));
                }
                else {
                    merged = this._mergeSegments(newSegments[shortSegmentIndex - 1], newSegments[shortSegmentIndex]);
                    newSegments = newSegments.slice(0,shortSegmentIndex-1).concat([merged]).concat(newSegments.slice(shortSegmentIndex + 1));
                }
            }
            
            return newSegments;
        },
        
        _mergeSegments: function(a, b) {
            return Segment.create(a.start,b.end);
        },
        
        _indexOfShortSegment: function(segments) {
            var index = -1;
            segments.forEach(function(segment, i) {
                if (segment.vector.length < this.minLength) {
                    index = i;
                }
            }, this);
            
            return index;
        },
        
        _smoothSegments: function(segments) {
            var points = this._segmentsToPoints(segments);
            var jointIndicies = this._getJointIndicies(points);
            var newSegments = this._getSegments(jointIndicies, points);
            return newSegments;
        },
        
        _segmentsToPoints: function(segments) {
            var points = [];
            if (segments.length) {
                points = [segments[0].start];
                segments.forEach(function(segment) {
                    points.push(segment.end);
                });
            }
            return points;
        },
        
        _getSegments: function(indices, points) {
           var segments = [], segment, start, end;
           for (var i=1; i<indices.length; i++) {
               start = points[indices[i-1]];
               end = points[indices[i]];
               segment = Segment.create(start, end);
               segments.push(segment);
           } 
           return segments;
        },
        
        _getJointIndicies: function(data) {
            var angles = this._getAngles(data);
            var jointIndicies = this._anglesToJointIndicies(angles); 
            return jointIndicies;
        },
        
        _getSegmentAngles: function(segments) {
            var angles = [];
            for (var i=1; i<segments.length; i++) {
                angles.push(MathUtil.threePointsAngle(segments[i-1].start, segments[i-1].end, segments[i].end));
            }
            return angles;
        },
        
        _getAngles: function(data) {
            var angles = [];
            for (var i=2; i<data.length; i++) {
                angles.push(MathUtil.threePointsAngle(data[i-2], data[i-1], data[i]))
            }
            return angles;
        },
        
        _anglesToJointIndicies: function(angles) {
            var joints = angles.map(function(angle) {
                return !this._isStraight(angle);
            }, this);
            joints = [true].concat(joints).concat(true); // start and end are joints
            
            var jointIndicies = joints.reduce(function(prev, curr, index) {
                if (curr) {
                    prev.push(index);
                }
                return prev;
            }, []);
            
            return jointIndicies;
        },
        
        _isStraight: function(angle) {
            return Math.abs(Math.PI - angle) <= this.tolerance;
        }
        
        
    });
    
    return PolygonalLineAlgorithm;
    
});