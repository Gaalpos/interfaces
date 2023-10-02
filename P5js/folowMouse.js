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
        text("abajo izquierda", mouseX, mouseY);
        fill(200, 0, 0);
        rect(0, 0, 200, 200);
        
    }
    if (mouseX > 200 && mouseY < 200) {
        text("abajo izquierda", mouseX, mouseY);
        fill(0, 0, 170);
        rect(200, 0, 200, 200);
    }
    if (mouseX < 200 && mouseY > 200) {
        text("arriba derecha", mouseX, mouseY);
        fill(100, 200, 70);
        rect(0, 200, 200, 200);
    }
    if (mouseX > 200 && mouseY > 200) {
        text("abajo derecha", mouseX, mouseY);
        fill(60, 50, 70);
        rect(200, 200, 200, 200);
    }
    //  text("hello world", mouseX, mouseY);
}