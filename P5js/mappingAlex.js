let OnetoOne = false;
let OnetoMany = false;
let ManytoOne = false;
let ManytoMany = false;
let principal = true;
let accion = false;
let y = 0;
let pressedW = false;
let pressedE = false;
let r = 0;
let b = 0;
let linea = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont('Times New Roman');
    pantalla();
    focus();

}

function draw() {
    createCanvas(windowWidth, windowHeight);
    pantalla();


}


function keyPressed() {
    if (principal) {

        if (key === '1') {
            principal = false;
            OnetoOne = true;

        }

        if (key === '2') {
            principal = false;
            OnetoMany = true;

        }

        if (key === '3') {
            principal = false;
            ManytoOne = true;

        }

        if (key === '4') {
            principal = false;
            ManytoMany = true;

        }

    }

    if (OnetoOne) {

        if (key === 'm' || key === 'M') {
            principal = true;
            OnetoOne = false;
            accion = false;

        }

        if (key === 'w' || key === 'W') {
            accion = true;
        }
        if (key === 'r' || key === 'R') {
            accion = false;
        }
    }

    if (OnetoMany) {

        if (key === 'm' || key === 'M') {
            principal = true;
            OnetoMany = false;
            accion = false;

        }

        if (key === 'w' || key === 'W') {
            accion = true;
        }
        if (key === 'r' || key === 'R') {
            accion = false;
        }
    }

    if (ManytoOne) {

        if (key === 'm' || key === 'M') {
            principal = true;
            ManytoOne = false;
            accion = false;
            pressedW = false;
            pressedE = false;

        }

        if (key === 'w' || key === 'W') {
            pressedW = true;
        }
        if ((pressedW == true) && (key === 'e' || key === 'E')) {
            accion = true;
        }
        if (key === 'e' || key === 'E') {
            pressedE = true;
        }
        if ((pressedE == true) && (key === 'w' || key === 'W')) {
            accion = true;
        }
        if (key === 'r' || key === 'R') {
            accion = false;
            pressedW = false;
            pressedE = false;
        }
    }

    if (ManytoMany) {

        if (key === 'm' || key === 'M') {
            principal = true;
            ManytoMany = false;
            accion = false;
            pressedW = false;
            pressedE = false;

        }

        if (key === 'w' || key === 'W') {
            pressedW = true;
        }
        if ((pressedW == true) && (key === 'e' || key === 'E')) {
            accion = true;
        }
        if (key === 'e' || key === 'E') {
            pressedE = true;
        }
        if ((pressedE == true) && (key === 'w' || key === 'W')) {
            accion = true;
        }
        if (key === 'r' || key === 'R') {
            accion = false;
            pressedW = false;
            pressedE = false;
            r = 0;
            b = 0;
            linea = 0;
        }
    }
}




function pantalla() {
    if (principal) {
        PRINCIPAL();
    }

    if (OnetoOne) {
        background(161, 173, 172);
        textSize(windowWidth / 30);
        textStyle(BOLD);
        fill(29, 107, 25);
        text("ONE TO ONE", windowWidth / 2.55, windowHeight / 8.2);
        textSize(windowWidth / 35);
        textStyle(NORMAL);
        fill(
            7, 20, 120
        );
        text("Acción --- Pulsa 'W'", windowWidth / 6, windowHeight / 4.3);
        text("Menú Principal --- Pulsa 'M'", windowWidth / 6, windowHeight / 3.4);
        text("Reiniciar --- Pulsa 'R'", windowWidth / 6, windowHeight / 2.8);

        if (accion) {
            ONETOONE();
        }

    }

    if (OnetoMany) {
        background(161, 173, 172);
        textSize(windowWidth / 30);
        textStyle(BOLD);
        fill(29, 107, 25);
        text("ONE TO MANY", windowWidth / 2.55, windowHeight / 8.2);
        textSize(windowWidth / 35);
        textStyle(NORMAL);
        fill(
            7, 20, 120
        );
        text("Acción --- Pulsa 'W'", windowWidth / 6, windowHeight / 4.3);
        text("Menú Principal --- Pulsa 'M'", windowWidth / 6, windowHeight / 3.4);
        text("Reiniciar --- Pulsa 'R'", windowWidth / 6, windowHeight / 2.8);

        if (accion) {
            ONETOMANY();
        }

    }

    if (ManytoOne) {
        background(161, 173, 172);
        textSize(windowWidth / 30);
        textStyle(BOLD);
        fill(29, 107, 25);
        text("MANY TO ONE", windowWidth / 2.55, windowHeight / 8.2);
        textSize(windowWidth / 35);
        textStyle(NORMAL);
        fill(
            7, 20, 120
        );
        text("Acción --- Pulsa 'W' y 'E'", windowWidth / 6, windowHeight / 4.3);
        text("Menú Principal --- Pulsa 'M'", windowWidth / 6, windowHeight / 3.4);
        text("Reiniciar --- Pulsa 'R'", windowWidth / 6, windowHeight / 2.8);

        if (accion) {
            MANYTOONE();
        }
    }

    if (ManytoMany) {
        background(161, 173, 172);
        textSize(windowWidth / 30);
        textStyle(BOLD);
        fill(29, 107, 25);
        text("MANY TO MANY", windowWidth / 2.55, windowHeight / 8.2);
        textSize(windowWidth / 35);
        textStyle(NORMAL);
        fill(
            7, 20, 120
        );
        text("Acción --- Pulsa 'W' y 'E'", windowWidth / 6, windowHeight / 4.3);
        text("Menú Principal --- Pulsa 'M'", windowWidth / 6, windowHeight / 3.4);
        text("Reiniciar --- Pulsa 'R'", windowWidth / 6, windowHeight / 2.8);

        if (accion) {
            MANYTOMANY();
        }
    }

}


//  Menú Principal
function PRINCIPAL() {
    background(161, 173, 172);
    textSize(windowWidth / 30);
    textStyle(BOLD);
    fill(29, 107, 25);
    text("Elija un ejemplo de Mapping", windowWidth / 3.33, windowHeight / 8.2);
    textSize(windowWidth / 35);
    textStyle(NORMAL);
    fill(
        7, 20, 120
    );
    text("Pulse 1 para acceder a ONE TO ONE", windowWidth / 6, windowHeight / 3.85);
    text("Pulse 2 para acceder a ONE TO MANY", windowWidth / 6, windowHeight / 3);
    text("Pulse 3 para acceder a MANY TO ONE", windowWidth / 6, windowHeight / 2.43);
    text("Pulse 4' para acceder a MANY TO MANY", windowWidth / 6, windowHeight / 2.05);
}


// Ejemplo One to One
function ONETOONE() {
    fill(252, 15, 3);
    circle(windowWidth / 2, windowHeight / 1.8, windowWidth / 8);


}


// Ejemplo One to Many
function ONETOMANY() {
    background(0);
    fill(41, 235, 12);
    circle(windowWidth / 2, y, windowWidth / 8);

    if (y < windowHeight)
        y += windowHeight / 80;
    else {
        y = 0;
    }
}



// Ejemplo Many to One
function MANYTOONE() {
    background(161, 173, 172);
    textSize(windowWidth / 30);
    textStyle(BOLD);
    fill(29, 107, 25);
    text("MANY TO ONE", windowWidth / 2.55, windowHeight / 8.2);
    textSize(windowWidth / 35);
    textStyle(NORMAL);
    fill(
        7, 20, 120
    );
    text("Menú Principal --- Pulsa 'M'", windowWidth / 6, windowHeight / 3.4);
    text("Reiniciar --- Pulsa 'R'", windowWidth / 6, windowHeight / 2.8);
}

// Ejemplo Many to Many
function MANYTOMANY() {
    fill(r, 0, b);
    circle(windowWidth / 2, windowHeight / 1.8, windowWidth / 8);
    circle(windowWidth / 1.5, windowHeight / 1.8, windowWidth / 8);
    circle(windowWidth / 3, windowHeight / 1.8, windowWidth / 8);
    rect(0, windowHeight / 1.3, linea, windowWidth / 30);
    if (r < 255 && b < 255) {
        r += 1;
        b += 1;
    }
    if (linea < windowWidth) {
        linea += 3;
    }

}