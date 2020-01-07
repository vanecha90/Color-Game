var numsquares= 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function(){
 easyBtn.classList.add("selected");
 hardBtn.classList.remove("selected");
 numsquares = 3;
 colors = generateRandomColors(numsquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
     if(colors[i]){
         squares[i].style.backgroundColor = colors[i];

     }else{
         squares[i].style.display = "none";
     }
 }

});

hardBtn.addEventListener("click", function(){
 hardBtn.classList.add("selected");
 easyBtn.classList.remove("selected");
 numsquares= 6;
 colors = generateRandomColors(numsquares);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    
 }
});

resetButton.addEventListener("click", function(){
//generate new colors
colors = generateRandomColors(numsquares);
//pick color from random arr
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors";
 messageDisplay.textContent  = "";
//change color  of squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor ="steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
