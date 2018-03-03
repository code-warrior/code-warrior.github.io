function drawHead() {
    fill(`rgba(255, 255, 255, 0)`);
    ellipse((0.5 * CANVAS_WIDTH), (0.125 * CANVAS_HEIGHT), (0.25 * CANVAS_HEIGHT), (0.25 * CANVAS_HEIGHT));
}

function drawTorso() {
    line((0.5 * CANVAS_WIDTH), (0.25 * CANVAS_HEIGHT), (0.5 * CANVAS_WIDTH), (0.75 * CANVAS_HEIGHT));
}

function drawArm(side) {
    let percentage;

    if (`left` === side) {
        percentage = 0.325;
    } else {
        if (`right` === side) {
            percentage = 0.675;
        } else {
            console.error(`Not a valid arm side.`);
        }
    }

    line((0.5 * CANVAS_WIDTH), (0.35 * CANVAS_HEIGHT), (percentage * CANVAS_WIDTH), (0.5 * CANVAS_HEIGHT));
}

function drawLeg(side) {
    let percentage = 0.25;

    if (`left` === side) {
        percentage = 0.25;
    } else {
        if (`right` === side) {
            percentage = 0.75;
        } else {
            console.error(`Not a valid leg side.`);
        }
    }
    line((0.5 * CANVAS_WIDTH), (0.75 * CANVAS_HEIGHT), (percentage * CANVAS_WIDTH), CANVAS_HEIGHT);
}
