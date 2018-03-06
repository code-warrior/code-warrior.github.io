'use strict';

const
    WIDTH = 640,
    HEIGHT = 480,
    BG_COLOR = `#c0ffee`;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    // Read more at https://p5js.org/reference/#/p5/background
    background(BG_COLOR);
}
