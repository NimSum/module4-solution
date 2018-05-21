// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.

(function(window){//IIFE wrap
	var helloSpeaker = {}; 
	var speakWord = "Hello"; //not attached to helloSpeaker
	helloSpeaker.speak = function(name) { //function executed when the name doesn't begin with the letter "J/j"
	  console.log(speakWord + " " + name); //speak is not a redundant variable because it is wrapped in an IIFE
	}
	window.helloSpeaker = helloSpeaker; //sets up helloSpeaker to the global scope
})(window);//end of IIFE wrap

//moved steps out of the code for easier reading ///
// STEP 4: Rewrite the 'speak' function such that it is attached to the
	// helloSpeaker object instead of being a standalone function.
	// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
