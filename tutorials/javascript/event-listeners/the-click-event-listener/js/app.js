/*jslint browser, es6, single, for, devel, this */
/*global window */

var leftButton = document.getElementById('left-button'),
    rightButton = document.getElementById('right-button'),
    errorStyles = 'background-color: red; padding: 2px; color: white; font-family: monospace; border-radius: 4px;',
    resetErrorStyles = 'background-color: inherit; padding: inherit; color: inherit; font-family: inherit; border-radius: none;';

function showAlert() {
    'use strict';

    alert('You clicked the ' + this.id);
}

if (null !== leftButton) {
    leftButton.addEventListener('click', showAlert, false);
} else {
    console.error('A reference to ID %c left-button %c could not be established.',
            errorStyles, resetErrorStyles);
}

if (null !== rightButton) {
    rightButton.addEventListener('click', showAlert, false);
} else {
    console.error('A reference to ID %c right-button %c could not be established.',
            errorStyles, resetErrorStyles);
}
