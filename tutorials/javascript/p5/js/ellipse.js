'use strict';

const WIDTH = 480,
    HEIGHT = 480,
    ELLIPSE_X = 160,
    ELLIPSE_Y = 160,
    ELLIPSE_WIDTH = 130,
    ELLIPSE_HEIGHT = 130;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    // Read more at https://p5js.org/reference/#/p5/ellipse and
    //   at https://p5js.org/reference/#/p5/ellipseMode

    ellipseMode(CENTER);
    ellipse((WIDTH / 2), (HEIGHT / 2), WIDTH, HEIGHT);
    line(0, (HEIGHT / 2), WIDTH, (HEIGHT / 2));

    ellipseMode(RADIUS);
    ellipse(ELLIPSE_X, ELLIPSE_Y, ELLIPSE_WIDTH, ELLIPSE_HEIGHT);
    line((ELLIPSE_X - ELLIPSE_WIDTH), ELLIPSE_Y, ((ELLIPSE_X - ELLIPSE_WIDTH) + (2 * ELLIPSE_WIDTH)), ELLIPSE_Y);
}
