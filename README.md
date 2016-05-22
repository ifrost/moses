# Moses

JavaScript library for mouse/touch gesture recognition. 

It's a JS version of https://github.com/ifrost/moses-flash.

# Demo

TBD

# How it works?

A `Sampler` is responsible for capturing user events and dispatching sampling events with list of sampled points.

A `Recogniser` listens to sampling events. When a gesture is sampled is processes the data. It checks all registered `Patterns` and runs the pattern's `Algorithm` passing sampled data. Each `Pattern` contains data that is used by algorithm to compare with sampled points. `Algorithm` returns a `Match` object with 0-1 value showing how well recognition of the pattern went.

# Example

``` javascript
// create collection of predefined patterns
var mosesPatterns = moses.model.MosesPatterns.create();
 
// choose patterns from the collection
var patterns = [mosesPatterns.V, mosesPatterns.CIRCLE, mosesPatterns.DASH, mosesPatterns.SQUARE, mosesPatterns.SEVEN, mosesPatterns.Z];
 
// create a sampler
var div = document.getElementById("sampler");
var sampler = moses.sampler.DistanceSampler.create(div, 5);

// create a recogniser
var recogniser = moses.recogniser.DefaultRecogniser.create();

// register selecte patterns
patterns.forEach(function(pattern) {
   recogniser.register(pattern);
});

// display the result
recogniser.on('recognised', function(data) {
   var text;
   console.log('Best match:', data.bestMatch);
   if (data.bestMatch.recognised) {
       text = 'Recognised: ' + data.bestMatch.pattern.name + ' (' + Math.floor(data.bestMatch.value * 100) + '%)';
       console.log(text);
   }
   else {
       text = 'Not recognised. Was it ' + data.bestMatch.pattern.name + '? (' + Math.floor(data.bestMatch.value * 100) + '%)';
       console.log(text);
   }
});

// assign sampler to the recogniser
recogniser.sampler = sampler;

// activate the sampler
sampler.activate();

```


