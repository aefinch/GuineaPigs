// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

var output = document.getElementById("output-target");
var title = document.getElementById("page-title");
var userInput = document.getElementById("keypress-input");
var colorButton = document.getElementById("add-color");
var guinea = document.getElementById("guinea-pig");
var hulkButton = document.getElementById("make-large");
var capture = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
function sectionId(){
	section = event.target.textContent;
	output.innerHTML = `You clicked on the ${section} section`;
};


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
function hoverTitle(){
	output.innerHTML = `You moved your mouse over the header`;
};

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
function leaveTitle(){
	output.innerHTML = `You left me!!`
};

// When you type characters into the input field, the output element should mirror the text in the input field.
function addUserOutput(){
	var textIn=userInput.value;
	output.innerHTML = textIn;
};

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
function textBlue(){
	guinea.style.color="blue";
};

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
function hulkify(){
	guinea.style.fontSize="x-large";
};

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
function addBorder(){
	guinea.style.border="black solid 2px";
};

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
function roundBorder(){
	guinea.style.borderRadius="20px";
};

title.addEventListener("mouseover", hoverTitle);
title.addEventListener("mouseout", leaveTitle);
userInput.addEventListener("keyup", addUserOutput);
colorButton.addEventListener("click", textBlue);
hulkButton.addEventListener("click", hulkify);
capture.addEventListener("click", addBorder);
rounded.addEventListener("click", roundBorder);
document.addEventListener("click", sectionId);