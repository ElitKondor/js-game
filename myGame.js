var numSquares = 6,
	colors = generateRandomColors(numSquares),
	resetBtn = document.querySelector("#reset"),
	selectedBtn = document.querySelector(".selected"),
	squares = document.querySelectorAll(".square"),
	colorDisplay = document.querySelector("#colorDisplay"),
	messageDisplay = document.querySelector("#message"),
	easyBtn = document.querySelector("#easyBtn"),
	hardBtn = document.querySelector("#hardBtn"),
	h1 = document.querySelector("h1");

easyBtn.addEventListener("click", function(){

	hardBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	selectedBtn.style.backgroundColor = "steelblue";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	} 
})

hardBtn.addEventListener("click", function(){

	easyBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	selectedBtn.style.backgroundColor = "steelblue";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	} 
})

resetBtn.addEventListener("click", function(){
	for ( i = 0; i < numSquares; i++)
	{
		resetBtn.textContent = "NEW COLORS";
		messageDisplay.textContent = "";
		colors[i] = randColor();
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		squares[i].style.backgroundColor = colors[i];
		h1.style.backgroundColor = "steelblue";
		selectedBtn.style.backgroundColor = "steelblue";
	}
})

for (var i = 0; i < squares.length; i++) {
	var pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			resetBtn.textContent = "Play Again?";
			h1.style.backgroundColor = pickedColor;
			selectedBtn.style.backgroundColor = pickedColor;
			changeColor();
		} else {
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	})
}

function randColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
	var random = Math.floor(Math.random() * numSquares);
	return colors[random];
}

function changeColor(){
	for ( i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}
}

function generateRandomColors(num){
	var arr = [];

	for ( i = 0; i < num; i++){
		arr.push(randColor());
	}

	return arr;
}