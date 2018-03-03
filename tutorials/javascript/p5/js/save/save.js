function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    noLoop();
}

function draw () {
    drawHead();
    drawArm(`left`);
    drawArm(`right`);
    drawTorso();
    drawLeg(`left`);
    drawLeg(`right`);

    save(`stick-figure.png`);
}
