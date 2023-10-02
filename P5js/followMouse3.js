function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
}

function draw() {
    let middleX = windowWidth / 2;
    let middleY = windowHeight / 2;
    background(0, 0, 200);
    rectMode(CORNER);
    if (mouseX < middleX && mouseY < middleY) {
        fill(200, 0, 0);
        rect(0, 0, middleX, middleY);
        fill(0, 0, 0);
        text("arriba izquierda", mouseX, mouseY);
    }
    if (mouseX > middleX && mouseY < middleY) {
        fill(0, 200, 20);
        rect(middleX, 0, middleX, middleY);
        fill(0, 0, 0);
        text("arriba derecha", mouseX, mouseY);
    }
    if (mouseX < middleX && mouseY > middleY) {
        fill(226, 252, 0);
        rect(0, middleY, middleX, middleY);
        fill(0, 0, 0);
        text("arriba derecha", mouseX, mouseY);
    }
    if (mouseX > middleX && mouseY > middleY) {
        fill(0, 0, 0);
        rect(middleX, middleY, middleX, middleY);
        fill(255, 255, 255);
        text("arriba derecha", mouseX, mouseY);
    }
}