'use strict';

const
    WIDTH = 768,
    HEIGHT = WIDTH,
    AN_EIGHTH = .125;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw () {
    clear();

    stroke(227);
    line((WIDTH / 2), 0, (WIDTH / 2), HEIGHT);
    line(0, (HEIGHT / 2), WIDTH, (HEIGHT / 2));
    fill(`red`);
    noStroke();

    beginShape();
    vertex((3 * AN_EIGHTH) * WIDTH, (2 * AN_EIGHTH) * HEIGHT);
    vertex((2 * AN_EIGHTH) * WIDTH, (3 * AN_EIGHTH) * HEIGHT);
    vertex((2 * AN_EIGHTH) * WIDTH, (5 * AN_EIGHTH) * HEIGHT);
    vertex((3 * AN_EIGHTH) * WIDTH, (6 * AN_EIGHTH) * HEIGHT);
    vertex((5 * AN_EIGHTH) * WIDTH, (6 * AN_EIGHTH) * HEIGHT);
    vertex((6 * AN_EIGHTH) * WIDTH, (5 * AN_EIGHTH) * HEIGHT);
    vertex((6 * AN_EIGHTH) * WIDTH, (3 * AN_EIGHTH) * HEIGHT);
    vertex((5 * AN_EIGHTH) * WIDTH, (2 * AN_EIGHTH) * HEIGHT);
    vertex((3 * AN_EIGHTH) * WIDTH, (2 * AN_EIGHTH) * HEIGHT);
    endShape();

    fill(`white`);
    textSize(128);
    text(`STOP`, (WIDTH / 2) - 174, (HEIGHT / 2) + 44);
}
