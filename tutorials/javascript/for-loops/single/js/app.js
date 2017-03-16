/*global window */

window.onload = function () {
    'use strict';

    let container = document.getElementById('container'),
        heading,
        i;

    for (i = 1; i < 7; i += 1) {
        heading = document.createElement('h' + i);
        heading.textContent = 'This is an H' + i;
        container.appendChild(heading);
    }
};
