// document elements
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// update the canvas every 10ms
var speed = 10;
var interval = setInterval(draw, speed);

var grass = document.getElementById("grass");
var sky = document.getElementById("sky");

var index_one = 0;
var index_two = canvas.width;


// draw functions
function draw() {
    ctx.drawImage(sky, index_one, 0);
    ctx.drawImage(grass, index_one, 0);
    index_one--;

    ctx.drawImage(sky, index_two, 0);
    ctx.drawImage(grass, index_two, 0);
    index_two--;

    if(Math.abs(index_one) == canvas.width) {
        index_one = canvas.width;
    }

    if(Math.abs(index_two) == canvas.width) {
        index_two = canvas.width;
    }

    console.log(index_one);
    
}