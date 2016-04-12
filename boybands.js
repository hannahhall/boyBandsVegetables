var bands = [
	"Boyz II Men",
	"NSync",
	"New Kids on the Block",
	"98 Degrees",
	"One Direction"
];
var vegetables = [
	"Carrots",
	"Kale",
	"Zucchini",
	"Broccoli",
	"Squash"
];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
bandElement

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping


for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentBand= bands[loopTracker];
	console.log("Loop Number, Band:", loopTracker, ",", currentBand);

}

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentVeggie= vegetables[loopTracker];
	console.log("Loop Number, Veggie:", loopTracker, ",", currentVeggie);
}




  // Add the band names into the correct <div>
  // currentBand = bandElement.innerHTML("These are boy bands: " + bands.join(", "));
  bandElement.innerHTML = "These are boy bands: " + bands.join(", ");


  // Add the veggie names into the correct <div>
  // currentVeggie = ???;
  veggieElement.innerHTML= "These are vegetables: " + vegetables.join(", ");




















