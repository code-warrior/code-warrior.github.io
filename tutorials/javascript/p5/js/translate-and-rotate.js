'use strict';

const WIDTH = 600,
    HEIGHT = 600,
    BOX_WIDTH = 130,
    BOX_HEIGHT = BOX_WIDTH;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw () {
    // Use degrees instead of radians for the rotate function
    angleMode(DEGREES);

    // Use the center of the canvas as the translation point
    translate((WIDTH / 2), (HEIGHT / 2));

    // Rotate the following shape 45 degrees
    rotate(45);

    // Shift the rectangle to the left by half the width of the rectangle, and shift
    // the rectangle to the top by half the height of the rectangle.
    rect(-(BOX_WIDTH / 2), -(BOX_HEIGHT / 2), BOX_WIDTH, BOX_HEIGHT);
}
