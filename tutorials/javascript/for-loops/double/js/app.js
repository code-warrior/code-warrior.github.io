/*jslint browser, es6, single, for, devel, multivar */
/*global window */

/**
 * Return a random number between min and max, where min is inclusive and max is
 * not.
 *
 * @param min is the minimum inclusive range in the random generation
 * @param max is the maximum exclusive range in the random generation
 * @returns {*} an integer between min and max if successful
 */
function getRandomNumber(min, max) {
    'use strict';

    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function () {
    'use strict';

    let body = document.body,
        row,
        column,
        cellIndex = 0,
        table = document.createElement('table'),
        tableRows = [],
        tableColumns = [],
        userInput = prompt('Enter a number', '4');

    const
        MIN = 0,
        MAX = 256;

    //
    // Convert the input from the user, which is created initially as a string, to
    // its base-10 numerical equivalent.
    //
    userInput = parseInt(userInput, 10);

    for (row = 0; row < userInput; row += 1) {
        tableRows[row] = document.createElement('tr');

        for (column = 0; column < userInput; column += 1) {
            tableColumns[cellIndex] = document.createElement('td');

            tableColumns[cellIndex].style.backgroundColor =
                    'rgb(' + getRandomNumber(MIN, MAX) + ', ' +
                    getRandomNumber(MIN, MAX) + ', ' +
                    getRandomNumber(MIN, MAX) + ')';

            tableRows[row].appendChild(tableColumns[cellIndex]);

            cellIndex += 1;
        }

        table.appendChild(tableRows[row]);
    }

    body.appendChild(table);
};
