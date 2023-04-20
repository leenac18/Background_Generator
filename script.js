var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

// Helper function to convert RGB color to hex code
function rgbToHex(rgb) {
	var rgbString = "'" + rgb + "'";
	var rgbColors = rgbString.match(/\d+/g);
	var r = rgbColors[0];
	var g = rgbColors[1];
	var b = rgbColors[2];
	const hex = ((r << 16) | (g << 8) | b).toString(16);
	return "#" + hex.padStart(6, "0"); //padStart will add leading zeroes to the string until it has a length of 6 characters.
}

//getting intiial background colors and setting them as initial input colors
var computedStyle = getComputedStyle(body);
var backgroundGradient = computedStyle.background;
var colorMatches = backgroundGradient.match(/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g);
var color1Match = colorMatches[0];
var color2Match = colorMatches[1];
color1.value = rgbToHex(color1Match);
color2.value = rgbToHex(color2Match);

//display initial linear gradient text:
css.textContent = "linear-gradient(to right, " 
	+ color1Match
	+ ", " 
	+ color2Match
	+ ");";

//setting gradient based on color inputs:
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//Randomize colors:
function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function randomHex() {
	var rRandom = randomNumber();
	var gRandom = randomNumber();
	var bRandom = randomNumber();
	var rgbRandom = "rgb(" + rRandom + ", " + gRandom + ", " + bRandom + ")";
	var hexRandom = rgbToHex(rgbRandom);
	return hexRandom;
}

function randomizeColors() {
	color1.value = randomHex();
	color2.value = randomHex();
}

randomButton.addEventListener("click", randomizeColors)





