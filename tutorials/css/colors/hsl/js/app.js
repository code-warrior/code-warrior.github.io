/*jslint browser, es6, single, devel */
/*global window */

window.onload = function () {
    'use strict';

    let body = document.body,
        code = document.getElementsByTagName('code')[0],
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
        code.textContent = hsl;
    }

    hueSlider.addEventListener('input', updateBackgroundColor, false);
    saturationSlider.addEventListener('input', updateBackgroundColor, false);
    lightnessSlider.addEventListener('input', updateBackgroundColor, false);
};
