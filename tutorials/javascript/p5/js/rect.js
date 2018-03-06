'use strict';

const
    WIDTH = 640,
    HEIGHT = 480;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    // Read more at https://p5js.org/reference/#/p5/rect
    rect(0, 0, (WIDTH/2), (HEIGHT/2));
}
