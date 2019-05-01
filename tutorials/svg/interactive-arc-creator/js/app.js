window.onload = () => {
    let path = document.querySelector(`svg > path`);

    let currentXPointInput = document.getElementById(`current-x-point--input`);
    let currentXPointOutput = document.getElementById(`current-x-point--output`);

    let currentYPointInput = document.getElementById(`current-y-point--input`);
    let currentYPointOutput = document.getElementById(`current-y-point--output`);

    let xRadiusInput = document.getElementById(`x-radius--input`);
    let xRadiusOutput = document.getElementById(`x-radius--output`);

    let yRadiusInput = document.getElementById(`y-radius--input`);
    let yRadiusOutput = document.getElementById(`y-radius--output`);

    let rotationInput = document.getElementById(`rotation--input`);
    let rotationOutput = document.getElementById(`rotation--output`);

    let largeArcFlagInput = document.getElementById(`large-arc-flag--input`);
    let largeArcFlagOutput = document.getElementById(`large-arc-flag--output`);

    let sweepFlagInput = document.getElementById(`sweep-flag--input`);
    let sweepFlagOutput = document.getElementById(`sweep-flag--output`);

    let endXPointInput = document.getElementById(`end-x-point--input`);
    let endXPointOutput = document.getElementById(`end-x-point--output`);

    let endYPointInput = document.getElementById(`end-y-point--input`);
    let endYPointOutput = document.getElementById(`end-y-point--output`);

    let dataAttributeValue = ``;

    let currentXPointValue = 125;
    let currentYPointValue = 75;
    let xRadiusValue = 100;
    let yRadiusValue = 50;
    let rotationValue = 0;
    let largeArcFlagValue = 0;
    let sweepFlagValue = 0;
    let endXPointValue = 225;
    let endYPointValue = 125;

    function updateDAttributeValue () {
        dataAttributeValue = `M${currentXPointValue},${currentYPointValue} A${xRadiusValue},${yRadiusValue} ${rotationValue} ${largeArcFlagValue} ${sweepFlagValue} ${endXPointValue},${endYPointValue}`;
        path.setAttribute(`d`, dataAttributeValue);
    }

    currentXPointInput.addEventListener(`input`, () => {
        currentXPointValue = parseInt(currentXPointInput.value, 10);
        currentXPointOutput.textContent = currentXPointValue.toString();
        updateDAttributeValue();
    });

    currentYPointInput.addEventListener(`input`, () => {
        currentYPointValue = parseInt(currentYPointInput.value, 10);
        currentYPointOutput.textContent = currentYPointValue.toString();
        updateDAttributeValue();
    });

    xRadiusInput.addEventListener(`input`, () => {
        xRadiusValue = parseInt(xRadiusInput.value, 10);
        xRadiusOutput.textContent = xRadiusValue.toString();
        updateDAttributeValue();
    });

    yRadiusInput.addEventListener(`input`, () => {
        yRadiusValue = parseInt(yRadiusInput.value, 10);
        yRadiusOutput.textContent = yRadiusValue.toString();
        updateDAttributeValue();
    });

    rotationInput.addEventListener(`input`, () => {
        rotationValue = parseInt(rotationInput.value, 10);
        rotationOutput.textContent = rotationValue.toString();
        updateDAttributeValue();
    });

    largeArcFlagInput.addEventListener(`change`, () => {
        largeArcFlagValue = parseInt(largeArcFlagInput.value, 10);
        largeArcFlagOutput.textContent = largeArcFlagValue.toString();
        updateDAttributeValue();
    });

    sweepFlagInput.addEventListener(`change`, () => {
        sweepFlagValue = parseInt(sweepFlagInput.value, 10);
        sweepFlagOutput.textContent = sweepFlagValue.toString();
        updateDAttributeValue();
    });

    endXPointInput.addEventListener(`input`, () => {
        endXPointValue = parseInt(endXPointInput.value, 10);
        endXPointOutput.textContent = endXPointValue.toString();
        updateDAttributeValue();
    });

    endYPointInput.addEventListener(`input`, () => {
        endYPointValue = parseInt(endYPointInput.value, 10);
        endYPointOutput.textContent = endYPointValue.toString();
        updateDAttributeValue();
    });
};
