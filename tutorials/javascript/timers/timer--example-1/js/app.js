/*jslint browser, es6, single, devel */
/*global window */

window.onload = function () {
    'use strict';

    let p = document.getElementsByTagName('p');

    setTimeout(function () {
        p[1].setAttribute('class', 'expand');
    }, 500);

    setTimeout(function () {
        p[1].removeAttribute('class');
    }, 3500);
};
