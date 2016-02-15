define(function(require){
   
   var p = require('p'),
       MultiplePatternAlgorithm = require('algorithm/multiple-pattern-algorithm');
   
   var MultiplePattern = p.extend({
      
      patterns: null,
      
      $create: function(name /**, patterns */) {
          this.name = name;
          var patterns = Array.prototype.slice.call(arguments).slice(1);
          this.patterns = patterns;
          this.algorithm = MultiplePatternAlgorithm.create();
      }
       
   });
   
   return MultiplePattern;
    
});