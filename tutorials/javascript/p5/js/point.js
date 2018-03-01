'use strict';

const
    FONT_SIZE = 32,
    OFFSET = 9;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // Read more at https://p5js.org/reference/#/p5/point

    clear();

    // Draw a point in the middle of the viewport
    point(windowWidth/2, windowHeight/2);

    textSize(FONT_SIZE);
    text(`← Look, a point!`, (windowWidth / 2) + OFFSET, (windowHeight / 2) + OFFSET);
}
