/*jslint browser, es6, single, devel */
/*global window */

window.onload = function () {
    'use strict';
    let msg = document.getElementById('msg');
    let body = document.body,
        hslOutput = document.getElementsByTagName('code')[0],
        rgbOutput = document.getElementsByTagName('code')[1],
        hueSlider = document.getElementById('hue'),
        saturationSlider = document.getElementById('saturation'),
        lightnessSlider = document.getElementById('lightness'),
        realTimeHueValue = document.querySelector('section:nth-of-type(1) > h2 > span'),
        realTimeSaturationValue = document.querySelector('section:nth-of-type(2) > h2 > span'),
        realTimeLightnessValue = document.querySelector('section:nth-of-type(3) > h2 > span');

    function updateBackgroundColor() {
        let hueValue = hueSlider.value,
            saturationValue = saturationSlider.value,
            lightnessValue = lightnessSlider.value,
            hsl = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;

        realTimeHueValue.innerHTML = `${hueValue}°`;
        realTimeSaturationValue.innerHTML = `${saturationValue}%`;
        realTimeLightnessValue.innerHTML = `${lightnessValue}%`;

        body.style.backgroundColor = hsl;
        hslOutput.textContent = hsl;
        rgbOutput.textContent = window.getComputedStyle(body, null).getPropertyValue('background-color');
    }

    hueSlider.addEventListener('input', updateBackgroundColor, false);
    saturationSlider.addEventListener('input', updateBackgroundColor, false);
    lightnessSlider.addEventListener('input', updateBackgroundColor, false);
};
