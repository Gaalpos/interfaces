let width = 400;
let height = 400;

function setup() {
    createCanvas(width, height);
    textAlign(CENTER);
}

function draw() {
    background(0, 0, 200);
    rectMode(CORNER);
    if (mouseX < 200 && mouseY < 200) {
        fill(200, 0, 0);
        rect(0, 0, 200, 200);
        fill(0, 0, 0);
        text("arriba izquierda", mouseX, mouseY);
    }
    if (mouseX > 200 && mouseY < 200) {
        fill(0, 0, 170);
        rect(200, 0, 200, 200);
        fill(0, 0, 0);
        text("abajo izquierda", mouseX, mouseY);
    }
    if (mouseX < 200 && mouseY > 200) {
        fill(100, 200, 70);
        rect(0, 200, 200, 200);
        fill(0, 0, 0);
        text("arriba derecha", mouseX, mouseY);
    }
    if (mouseX > 200 && mouseY > 200) {
        fill(60, 50, 70);
        rect(200, 200, 200, 200);
        fill(0, 0, 0);
        text("abajo derecha", mouseX, mouseY);
    }
    //  text("hello world", mouseX, mouseY);
}