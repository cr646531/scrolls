// document elements
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// update the canvas every 10ms
var speed = 1;
var interval = setInterval(draw, speed);

// entity variables
var grass = document.getElementById("grass");
var sky = document.getElementById("sky");
var clouds = document.getElementById("clouds");
var bushes = document.getElementById("bushes");
var trees = document.getElementById("trees");

var index_one = 0;
var index_two = canvas.width;
var index_unused = 3;


// draw functions
function draw() {
    ctx.drawImage(sky, index_one, 0);
    ctx.drawImage(clouds, index_one, 0);
    ctx.drawImage(bushes, index_one, 0);
    ctx.drawImage(trees, index_one, 0);
    ctx.drawImage(grass, index_one, 0);

    ctx.drawImage(sky, index_two, 0);
    ctx.drawImage(clouds, index_two, 0);
    ctx.drawImage(trees, index_two, 0);
    ctx.drawImage(bushes, index_two, 0);
    ctx.drawImage(grass, index_two, 0);
    
    index_one--;
    index_two--;


    if(Math.abs(index_one) == canvas.width) {
        index_one = canvas.width;
    }

    if(Math.abs(index_two) == canvas.width) {
        index_two = canvas.width;
    }

    console.log(index_one);
    
}