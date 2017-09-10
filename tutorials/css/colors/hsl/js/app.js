/*jslint browser, es6, single, devel, multivar */
/*global window */

window.onload = function () {
    'use strict';

    let body = document.body,
        hslOutput = document.getElementsByTagName('code')[0],
        rgbOutput = document.getElementsByTagName('code')[1],
        hueSlider = document.getElementById('hue'),
        saturationSlider = document.getElementById('saturation'),
        lightnessSlider = document.getElementById('lightness'),
        realTimeHueValue = document.querySelector('section:nth-of-type(2) > h2 > span'),
        realTimeSaturationValue = document.querySelector('section:nth-of-type(3) > h2 > span'),
        realTimeLightnessValue = document.querySelector('section:nth-of-type(4) > h2 > span'),
        realTimeRedValue = document.querySelector('section:nth-of-type(6) > h2 > span'),
        realTimeGreenValue = document.querySelector('section:nth-of-type(7) > h2 > span'),
        realTimeBlueValue = document.querySelector('section:nth-of-type(8) > h2 > span');

    function updateBackgroundColor() {

        // The “R” in “rgb(R, G, B)” is consistently at index 4.
        const INDEX_OF_R_IN_RGB = 4;
        const OFFSET = 2;

        let hueValue = hueSlider.value,
            saturationValue = saturationSlider.value,
            lightnessValue = lightnessSlider.value,
            hsl = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`,
            redSlider = document.getElementById('red-channel'),
            greenSlider = document.getElementById('green-channel'),
            blueSlider = document.getElementById('blue-channel');

        realTimeHueValue.innerHTML = `${hueValue}°`;
        realTimeSaturationValue.innerHTML = `${saturationValue}%`;
        realTimeLightnessValue.innerHTML = `${lightnessValue}%`;

        body.style.backgroundColor = hsl;
        hslOutput.textContent = hsl;
        rgbOutput.textContent = window.getComputedStyle(body, null).getPropertyValue('background-color');

        //
        // The top half of this program handles the interaction of the HSL sliders.
        // The bottom half deals with the RGB sliders.
        //
        // Note the assignment of rgbOutput.textContent to the variable rgbString
        // below.
        //

        let rgbString = rgbOutput.textContent,
            indexOfFirstComma = rgbString.indexOf(','),
            indexOfLastComma = rgbString.lastIndexOf(','),
            indexOfRightParens = rgbString.lastIndexOf(')'),
            lengthOfRinRGB = indexOfFirstComma - INDEX_OF_R_IN_RGB,
            lengthOfGinRGB = indexOfLastComma - (indexOfFirstComma + OFFSET),
            lengthOfBinRGB = indexOfRightParens - (indexOfLastComma + OFFSET);

        realTimeRedValue.textContent =
                redSlider.value =
                        rgbString.substr(INDEX_OF_R_IN_RGB, lengthOfRinRGB);

        realTimeGreenValue.textContent =
                greenSlider.value =
                        rgbString.substr((indexOfFirstComma + OFFSET), lengthOfGinRGB);

        realTimeBlueValue.textContent =
                blueSlider.value =
                        rgbString.substr((indexOfLastComma + OFFSET), lengthOfBinRGB);
    }

    hueSlider.addEventListener('input', updateBackgroundColor, false);
    saturationSlider.addEventListener('input', updateBackgroundColor, false);
    lightnessSlider.addEventListener('input', updateBackgroundColor, false);
};
