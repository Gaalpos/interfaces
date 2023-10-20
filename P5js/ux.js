
//modelos y diseños extraidos de la pagina https://lawsofux.com/es/
let value = 0;
let teclaA = false;
let teclaS = false;
let teclaD = false;
let teclaF = false;
let teclaG = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    focus();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 200, 70);
    let valor = value;

    let middleX = windowWidth / 2;
    let middleY = windowHeight / 2;

    let tercioY = windowHeight / 3;
    let tercioX = windowWidth / 3;
    let novenoX = tercioX / 3;
    let novenoY = tercioY / 3;

    let punto1 = tercioX;
    let punto2 = tercioX + novenoX;
    let punto3 = tercioX + novenoX * 2;

    rectMode(CORNER);

    function menu() {
        textSize(20);
        text("Pulsa una tecla:", middleX, middleY - 100);
        text("A - Efecto posición en serie", middleX, middleY - 60);
        text("S - Ley de Fitts", middleX, middleY - 30);
        text("D - Ley de jakob ", middleX, middleY);
        text("F - Ley de estética-usabilidad", middleX, middleY + 30);
        text("G - Ley de Postel", middleX, middleY + 60);
    }

    function serie() {
        background(137, 89, 168);
        text("Efecto posicion en serie", middleX, middleY - 100);
        noStroke();

        fill(89, 89, 89);
        square(tercioX, middleY - 40, 80);
        square(tercioX + 300, middleY - 40, 80);
        fill(255, 255, 255);
        square(tercioX + 100, middleY - 40, 80);
        square(tercioX + 200, middleY - 40, 80);

        fill(0, 0, 0);
        text(
            "Los usuarios tienden a recordar mejor al primer y último elemento de una serie.",
            middleX,
            middleY + 100
        );

        fill(0, 0, 0);
        textAlign(CENTER, CENTER);
    }

    function fitts() {
        background(93, 136, 58);
        text("Ley de Fitts", middleX, 150);
        noStroke();
        fill(255, 255, 255);
        circle(middleX, middleY, 500);
        fill(93, 136, 58);
        circle(middleX, middleY, 400);
        fill(255, 255, 255);
        circle(middleX, middleY, 300);
        fill(93, 136, 58);
        circle(middleX, middleY, 200);
        fill(255, 255, 255);
        circle(middleX, middleY, 100);
        fill(93, 136, 58);
        circle(middleX, middleY, 50);
        fill(0, 0, 0);
        text(
            "El tiempo para adquirir un objetivo es en función de la distancia y el tamaño del objetivo.",
            middleX,
            middleY + 290
        );
    }

    function jakob() {
        let textBoxWidth = 600;
        background(150, 136, 29);
        text("Ley de Jakob", middleX, middleY - 200);
        text(
            "Los usuarios pasan la mayor parte de su tiempo en otros sitios. Esto significa que los usuarios prefieren que su sitio funcione de la misma manera que todos los demás sitios que ya conocen.",
            middleX - textBoxWidth / 2,
            middleY + 200,
            textBoxWidth
        );
        fill(255, 255, 255);
        stroke(255, 255, 255);
        strokeWeight(15);
        noFill(); // Set the shape to have no fill
        rect(middleX - 100, middleY - 100, 200, 200);
        rect(middleX - 60, middleY - 140, 200, 200);
        noStroke();
        fill(0, 0, 0);
    }

    function estetica() {
        background(80, 100, 133);
        let textBoxWidth = 600;
        let lado = 141.42;
        let altura = (sqrt(3) / 2) * lado;
        let vertice1X = middleX;
        let vertice1Y = middleY - lado / 2;

        let vertice2X = middleX - lado / 2;
        let vertice2Y = middleY + altura / 2;

        let vertice3X = middleX + lado / 2;
        let vertice3Y = middleY + altura / 2;

        text("Efecto de Estética-Usabilidad", middleX, 300);
        text(
            "Los usuarios a menudo perciben un diseño estéticamente agradable como un diseño que es más útil.",
            middleX - textBoxWidth / 2,
            600,
            textBoxWidth
        );
        noStroke();
        fill(68, 85, 113);
        circle(middleX, middleY, 200);
        fill(58, 72, 96);
        rect(middleX - lado / 2, middleY - lado / 2, lado);
        fill(255, 255, 255);
        triangle(vertice1X, vertice1Y, middleX - lado / 2, middleY + lado / 2, middleX + lado / 2, middleY + lado / 2);

        fill(0, 0, 0);
    }

    function postel() {
        let lado = tercioX + 100;
        let alto = tercioY + 90;
        let alto2 = alto + 90;
        let alto3 = alto2 + 90;
        let alto4 = alto3 + 90;
        background(65, 149, 78);
        text("Ley de Postel", middleX, middleY - 200);
        text(
            "Sea liberal en lo que acepta y conservador en lo que envía.",
            middleX,
            alto4 + 30
        );
        noStroke();
        fill(255, 255, 255);

        fill(244, 241, 208);
        triangle(punto1, tercioY, punto2, tercioY, tercioX + novenoX / 2, alto);
        triangle(punto2, tercioY, punto3, tercioY, punto2 + novenoX / 2, alto);
        triangle(
            punto3,
            tercioY,
            punto3 + novenoX,
            tercioY,
            punto3 + novenoX / 2,
            alto
        );
        fill(208, 222, 182);
        triangle(punto1, alto, punto2, alto, tercioX + novenoX / 2, alto2);
        triangle(punto2, alto, punto3, alto, punto2 + novenoX / 2, alto2);
        triangle(punto3, alto, punto3 + novenoX, alto, punto3 + novenoX / 2, alto2);
        fill(172, 204, 156);
        triangle(punto1, alto2, punto2, alto2, tercioX + novenoX / 2, alto3);
        triangle(punto2, alto2, punto3, alto2, punto2 + novenoX / 2, alto3);
        triangle(
            punto3,
            alto2,
            punto3 + novenoX,
            alto2,
            punto3 + novenoX / 2,
            alto3
        );
        fill(137, 185, 130);
        triangle(punto1, alto3, punto2, alto3, tercioX + novenoX / 2, alto4);
        triangle(punto2, alto3, punto3, alto3, punto2 + novenoX / 2, alto4);
        triangle(
            punto3,
            alto3,
            punto3 + novenoX,
            alto3,
            punto3 + novenoX / 2,
            alto4
        );

        //   triangle(punto2, tercioY, punto3, tercioY, )

        fill(0, 0, 0);
    }

    background(162, 98, 163);
    //text(keyCode, middleX, middleY);


    if (!keyIsPressed) {
        menu();
    } else {
        if (keyCode == 65) {
            serie();
        }
        else if (keyCode == 83) {
            fitts();
        }
        else if (keyCode == 68) {
            jakob();
        }
        else if (keyCode == 70) {
            estetica();
        }
        else if (keyCode == 71) {
            postel();
        }
    }


}
