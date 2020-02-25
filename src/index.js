// document elements
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// update the canvas every 10ms
var speed = 10;
var interval = setInterval(draw, speed);

// draw functions
function draw() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "black";
	ctx.fillText(`Testing`, 10, 10);
}