let value = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 200, 70);
  let valor = value;
  let middleX = windowWidth / 2;
  let middleY = windowHeight / 2;
  rectMode(CORNER);

  function menu() {
    textSize(20);
    text("Pulsa una tecla:", middleX, middleY - 100);
    text("A - Efecto posicion en serie", middleX, middleY - 60);
    text("S - Ley de Fitts", middleX, middleY - 30);
    text("D - Ley de jakob ", middleX, middleY);
    text("F - Ley de estética-usabilidad", middleX, middleY + 30);
    text("G - Ley de Postel", middleX, middleY + 60);
  }

  background(0, 200, 70);
  //text(keyCode, middleX, middleY);
  if (keyIsPressed == false) {
    menu();
  } else {
    if (keyCode == 65) {
      text("A", 30, 30);
    }
    if (keyCode == 83) {
      text("S", 30, 30);
    }
    if (keyCode == 68) {
      text("D", 30, 30);
    }
    if (keyCode == 70) {
      text("F", 30, 30);
    }
    if (keyCode == 71) {
      text("G", 30, 30);
    }
  }
}
