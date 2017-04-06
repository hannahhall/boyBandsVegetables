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
	"Squash",
	"Tomato"
];

// The number of loops to perform (what if the array changes?)
// var loopCount = 5;
var loopCount = bands.length >vegetables.length ? bands.length : vegetables.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentBand= bands[loopTracker];
	if (currentBand!==undefined) {
		bandElement.innerHTML +=("<div>" + currentBand + "</div");
	}
	currentVeggie= vegetables[loopTracker];
	if (currentVeggie!==undefined) {
		veggieElement.innerHTML +=("<div>" + currentVeggie + "</div");
	}
}
