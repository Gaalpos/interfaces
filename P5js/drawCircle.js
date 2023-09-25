let x = 200; 
let y = 200;
const circleSize = 20; 
const canvasWidth = 400; 

function setup() {
  createCanvas(canvasWidth, 400);
}

function draw() {
  background(100, 190, 190);

  x = x + 1; 
  //y = y - 1;
  if (x > canvasWidth + circleSize / 2) {
    x = -circleSize / 2;
  }
  circle(x, 200, circleSize);
}