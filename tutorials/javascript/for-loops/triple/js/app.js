/*jslint browser, es6, single, for, devel, multivar */
/*global window, chrome */

window.onload = function () {
    'use strict';

    let container = document.getElementById('container'),
        table,
        row,
        column,
        randomNumberIndex,
        randomNumber;

    const MAX = 3;

    table = '<table>';

    for (row = 0; row < MAX; row += 1) {
        table += '<tr>';

        for (column = 0; column < MAX; column += 1) {
            table += '<td>';

            for (randomNumberIndex = 0; randomNumberIndex < MAX; randomNumberIndex += 1) {
                randomNumber = Math.floor(10 * Math.random());

                table += (2 !== randomNumberIndex)
                    ? randomNumber + ', '
                    : randomNumber;
            }

            table += '</td>';
        }

        table += '</tr>';
    }

    table += '</table>';

    container.innerHTML = table;
};
