define(function(require){
   
   var p = require('p'),
       Matching = require('model/matching');
   
   var MultiplePatternAlgorithm = p.extend({
       
       match: function(multiplePattern, samplingData) {
           
           var bestMatching, currentMatching;
           
           // find best matching
           multiplePattern.patterns.forEach(function(pattern){
				currentMatching = pattern.algorithm.match(pattern, samplingData);
				if (bestMatching != null) {
					bestMatching = currentMatching.value > bestMatching.value ? currentMatching : bestMatching;
				}
				else {
					bestMatching = currentMatching;
				}
			})
			
			// treat subpattern matching as complex pattern matching
			return Matching.create(multiplePattern, bestMatching.value, bestMatching.recognised);
           
       }
       
   });
   
   return MultiplePatternAlgorithm;
    
});