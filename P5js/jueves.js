let x = 250;

function setup() {
  createCanvas(600, 600);
  frameRate(2);
}

function draw() {
  console.log(mouseX); 
  if (mouseX > 200 && mouseX <400 ) {
    background(100);
    for (let y = 0; y <= 600; y = y + 20) {
      for (let i = 0; i <= 600; i = i + 20) {
        fill(random(200), random(300), random(160));
        circle(random(i, i + 20), random(y, y + 20), 20);
      }
    }
  }else {
    background(random(200), random(300), random(160));
  }

}
