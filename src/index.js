// document elements
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// update the canvas every 10ms
var speed = 1;
var interval = setInterval(draw, speed);

var background = document.getElementById("background");
var background2 = document.getElementById("background2");

var index_one = 0;
var index_two = canvas.width * 2;

// draw functions
function draw() {
    ctx.drawImage(background, index_one, 0);
    index_one--;

    ctx.drawImage(background2, index_two, 0);
    index_two--;

    if(Math.abs(index_one) == canvas.width * 2) {
        index_one = canvas.width * 2;
    }

    if(Math.abs(index_two) == canvas.width * 2) {
        index_two = canvas.width * 2;
    }

    console.log(index_one);
    
}